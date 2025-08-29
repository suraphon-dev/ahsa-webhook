const getSourceTypeReply = require('./getSourceTypeReply')

module.exports = (client) => ({
   // 1. ผู้ใช้ส่งข้อความ (text, image, video, audio, file, location, sticker)
   message: (event) => {
      const reply = getSourceTypeReply(event.source.type, event)
      if (reply) {
         return client.replyMessage(event.replyToken, reply)
      }
   },

   // 2. ผู้ใช้เพิ่มเพื่อน
   follow: (event) => {
      return client.replyMessage(event.replyToken, {
         type: 'text',
         text: 'ขอบคุณที่เพิ่มเพื่อนครับ 🙏'
      })
   },

   // 3. ผู้ใช้บล็อกบอท
   unfollow: (event) => {
      console.log('ผู้ใช้บล็อกบอท')
   },

   // 4. บอทถูกเชิญเข้ากลุ่ม/ห้อง
   join: (event) => {
      return client.replyMessage(event.replyToken, {
         type: 'text',
         text: 'ดีใจที่ได้เข้ากลุ่มครับ 👋'
      })
   },

   // 5. บอทถูกลบออกจากกลุ่ม/ห้อง
   leave: (event) => {
      console.log('บอทถูกลบออกจาก:', event.source.type)
   },

   // 6. มีสมาชิกใหม่เข้ากลุ่ม/ห้อง
   memberJoined: (event) => {
      return client.replyMessage(event.replyToken, {
         type: 'text',
         text: 'ยินดีต้อนรับสมาชิกใหม่ครับ 🎉'
      })
   },

   // 7. มีสมาชิกออกจากกลุ่ม/ห้อง
   memberLeft: (event) => {
      console.log('สมาชิกออกจาก:', event.source.type)
   },

   // 8. ผู้ใช้กดปุ่ม postback
   postback: (event) => {
      return client.replyMessage(event.replyToken, {
         type: 'text',
         text: `คุณกดปุ่มที่มีค่า: ${event.postback.data}`
      })
   },

   // 9. Beacon Event (IoT)
   beacon: (event) => {
      return client.replyMessage(event.replyToken, {
         type: 'text',
         text: `Beacon detect: ${event.beacon.type}`
      })
   },

   // 10. Account Link Event
   accountLink: (event) => {
      return client.replyMessage(event.replyToken, {
         type: 'text',
         text: event.link.result === 'ok' ? 'เชื่อมบัญชีสำเร็จ ✅' : 'การเชื่อมบัญชีล้มเหลว ❌'
      })
   },

   // 11. Things Event (IoT Device)
   things: (event) => {
      return client.replyMessage(event.replyToken, {
         type: 'text',
         text: `Things event: ${event.things.type}`
      })
   },

   default: (event) => {
      console.log('Event ที่ยังไม่รองรับ:', event)
   }
})
