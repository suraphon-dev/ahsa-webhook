const getTextReplyCondition = require('../message/getTextReplyCondition')

function getSourceTypeReply(sourceType, event) {
   const sourceText = event.message.text ? event.message.text.trim() : ''
   if (event.message.type === 'text') {
      if (sourceType === 'user') {
         const conditionReply = getTextReplyCondition(sourceText)
         if (conditionReply) return conditionReply

        
      } else if (sourceType === 'group') {
         return {
            type: 'text',
            text: 'นี่คือการคุยในกลุ่ม 👥'
         }
      } else if (sourceType === 'room') {
         return {
            type: 'text',
            text: 'นี่คือการคุยในห้องแชท 👨‍👩‍👧‍👦'
         }
      }
   } else if (event.message.type === 'image') {
      if (sourceType === 'user') {
         return {
            type: 'text',
            text: 'คุณส่งรูปภาพมาให้ครับ 📷'
         }
      }
   }
   return null
}

module.exports = getSourceTypeReply
