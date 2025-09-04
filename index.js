require('dotenv').config()

const express = require('express')
const line = require('@line/bot-sdk')
const axios = require('axios')

const app = express()

const config = {
   channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
   channelSecret: process.env.LINE_CHANNEL_SECRET
}

const client = new line.Client(config)

const getEventHandlers = require('./src/utils/eventHandlers')
const eventHandlers = getEventHandlers(client)

app.post('/webhook', line.middleware(config), async (req, res) => {
   try {
      const results = await Promise.all(
         req.body.events.map(async (event) => {
            // ทำ loading เฉพาะกรณีคุยแบบส่วนตัว (source.type === 'user')
            // เรียกใช้งาน loading ก่อน handleEvent
            if (event.source.type === 'user') {
               await loading(event.source.userId)
            }
            return handleEvent(event)
         })
      )
      res.json(results)
   } catch (err) {
      console.error(err)
      res.status(500).end()
   }
})

function handleEvent(event) {
   const handler = eventHandlers[event.type] || eventHandlers.default
   return handler(event)
}

function loading(userId) {
   return axios({
      method: 'post',
      url: 'https://api.line.me/v2/bot/chat/loading/start',
      headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`
      },
      data: { chatId: userId }
   })
}

// start server
const port = process.env.PORT || 3000
app.listen(port, () => {
   console.log(`Server running on ${port}`)
})
