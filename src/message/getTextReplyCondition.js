const flexCard = require('../flex/flex-ex')

function getTextReplyCondition(text) {
   if (text === 'อาสา') {
      return {
         type: 'text',
         text: 'สวัสดีฉันคืออาสา'
      }
   } else if (text === 'flex') {
      return {
         type: 'flex',
         altText: 'นี่คือการ์ดแบบ Flex',
         contents: flexCard.apply()
      }
   }

   return [
      {
         type: 'text',
         text: `👤 คุณส่งข้อความ: ${text}`
      }
   ]
}

module.exports = getTextReplyCondition
