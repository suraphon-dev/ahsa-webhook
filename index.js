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

// webhook endpoint
app.post('/webhook', line.middleware(config), (req, res) => {
   Promise.all(req.body.events.map(handleEvent))
      .then((result) => res.json(result))
      .catch((err) => {
         console.error(err)
         res.status(500).end()
      })
})

// ฟังก์ชัน handle event
function handleEvent(event) {
   console.log(event)
   // ignore non-text message
   if (event.type !== 'message' || event.message.type !== 'text') {
      return Promise.resolve(null)
   }

   // reply ข้อความเดิมกลับไป
   return client.replyMessage(event.replyToken, {
      type: 'text',
      text: `คุณพิมพ์: ${event.message.text}`
   })
}

// start server
const port = process.env.PORT || 3000
app.listen(port, () => {
   console.log(`Server running on ${port}`)
})
