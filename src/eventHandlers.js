// eventHandlers.js
// รวม handler สำหรับแต่ละ event type

module.exports = (client) => ({
   message: (event) => {
      const sourceType = event.source.type
      if (event.message.type === 'text') {
         if (sourceType === 'user') {
            return client.replyMessage(event.replyToken, [
               {
                  type: 'text',
                  text: 'นี่คือการคุยแบบส่วนตัว 👤'
               },
               {
                  type: 'text',
                  text: `คุณส่งข้อความ: ${event.message.text}`
               }
            ])
         } else if (sourceType === 'group') {
            return client.replyMessage(event.replyToken, {
               type: 'text',
               text: 'นี่คือการคุยในกลุ่ม 👥'
            })
         } else if (sourceType === 'room') {
            return client.replyMessage(event.replyToken, {
               type: 'text',
               text: 'นี่คือการคุยในห้องแชท 👨‍👩‍👧‍👦'
            })
         }
      } else if (event.message.type === 'image') {
         if (sourceType === 'user') {
            return client.replyMessage(event.replyToken, {
               type: 'text',
               text: 'คุณส่งรูปภาพมาให้ครับ 📷'
            })
         }
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
