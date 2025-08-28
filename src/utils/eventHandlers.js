const getSourceTypeReply = require('./getSourceTypeReply')

module.exports = (client) => ({
   message: (event) => {
      const reply = getSourceTypeReply(event.source.type, event)
      if (reply) {
         return client.replyMessage(event.replyToken, reply)
      }
   },
   follow: (event) => {
      return client.replyMessage(event.replyToken, {
         type: 'text',
         text: 'ขอบคุณที่เพิ่มเพื่อนครับ 🙏'
      })
   },
   unfollow: (event) => {
      console.log('ผู้ใช้บล็อกบอท')
   },
   join: (event) => {
      return client.replyMessage(event.replyToken, {
         type: 'text',
         text: 'ดีใจที่ได้เข้ากลุ่มครับ 👋'
      })
   },
   postback: (event) => {
      return client.replyMessage(event.replyToken, {
         type: 'text',
         text: `คุณกดปุ่มที่มีค่า: ${event.postback.data}`
      })
   },
   default: (event) => {
      console.log('event อื่น ๆ:', event)
   }
})
