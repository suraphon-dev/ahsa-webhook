require('dotenv').config()

const express = require('express')
const line = require('@line/bot-sdk')

const app = express()

// 🔑 ตั้งค่าจาก LINE Developers Console
const config = {
   channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
   channelSecret: process.env.LINE_CHANNEL_SECRET
}

// สร้าง client
const client = new line.Client(config)

const getEventHandlers = require('./src/eventHandlers')
const eventHandlers = getEventHandlers(client)

// webhook endpoint
app.post('/webhook', line.middleware(config), (req, res) => {
   Promise.all(req.body.events.map(handleEvent))
      .then((result) => res.json(result))
      .catch((err) => {
         console.error(err)
         res.status(500).end()
      })
})

function handleEvent(event) {
   const handler = eventHandlers[event.type] || eventHandlers.default
   return handler(event)
}

// start server
const port = process.env.PORT || 3000
app.listen(port, () => {
   console.log(`Server running on ${port}`)
})
