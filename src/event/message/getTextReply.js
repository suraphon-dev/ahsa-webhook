const flexCard = require('../../flex/flex-ex')
const flexGroup = require('../../flex/flex-group')

function getTextReplyConditionUser(text) {
   switch (text) {
      case 'อาสา':
         return { type: 'text', text: 'สวัสดีฉันคืออาสา' }
      case 'flex':
         return {
            type: 'flex',
            altText: 'นี่คือการ์ดแบบ Flex',
            contents: flexCard.apply()
         }
      default:
         return [{ type: 'text', text: `👤 คุณส่งข้อความ: ${text}` }]
   }
}

function getTextReplyConditionGroup(text) {
   switch (text) {
      case 'อาสา-g':
         return { type: 'text', text: 'สวัสดีฉันคืออาสา (group)' }
      case 'flex-g':
         return {
            type: 'flex',
            altText: 'นี่คือการ์ดแบบ Flex (group)',
            contents: flexGroup.apply()
         }
      default:
         return [{ type: 'text', text: `👥 คุณส่งข้อความในกลุ่ม: ${text}` }]
   }
}

function getTextReply(sourceType, text) {
   switch (sourceType) {
      case 'user':
         return getTextReplyConditionUser(text)
      case 'group':
         return getTextReplyConditionGroup(text)
      default:
         return null
   }
}

module.exports = { getTextReply }
