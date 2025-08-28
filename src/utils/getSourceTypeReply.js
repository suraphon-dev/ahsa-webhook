const { getTextReplyConditionUser, getTextReplyConditionGroup } = require('../message/getTextReplyCondition')
const { getImageReplyConditionUser, getImageReplyConditionGroup } = require('../message/getImageReplyCondition')

/**
 * สร้างข้อความตอบกลับตามประเภท source และ event
 * @param {string} sourceType - ประเภท source (user, group, room)
 * @param {object} event - LINE event object
 * @returns {object|array|null} - ข้อความตอบกลับ
 */

function getSourceTypeReply(sourceType, event) {
   if (!event || !event.message) return null
   const sourceText = event.message.text ? event.message.text.trim() : ''

   console.log(event)
   console.log('====================')
   console.log(event.message)

   switch (event.message.type) {
      // ข้อความ
      case 'text':
         switch (sourceType) {
            case 'user':
               return getTextReplyConditionUser(sourceText)
            case 'group':
               return getTextReplyConditionGroup(sourceText)
            default:
               return null
         }

      // รูปภาพ
      case 'image':
         switch (sourceType) {
            case 'user':
               return getImageReplyConditionUser()
            case 'group':
               return getImageReplyConditionGroup()
            default:
               return null
         }

      // สติกเกอร์
      case 'sticker':
         if (sourceType === 'user') {
            return [
               { type: 'text', text: '👤 คุณส่งสติกเกอร์มาให้ครับ 🎉' },
               { type: 'text', text: `keywords: ${event.message.keywords}` }
            ]
         } else if (sourceType === 'group') {
            return [
               { type: 'text', text: '👥 คุณส่งสติกเกอร์มาให้ในกลุ่มครับ 🎉' },
               { type: 'text', text: `keywords: ${event.message.keywords}` }
            ]
         }

      // ตำแหน่ง
      case 'location':
         if (sourceType === 'user') {
            return [
               { type: 'text', text: '👤 คุณส่งตำแหน่งของคุณมาให้ครับ 📍' },
               { type: 'text', text: `latitude: ${event.message.latitude}, longitude: ${event.message.longitude}` },
               { type: 'text', text: `address: ${event.message.address}` }
            ]
         } else if (sourceType === 'group') {
            console.log('object')
            return [
               { type: 'text', text: '👥 คุณส่งตำแหน่งของกลุ่มมาให้ครับ 📍' },
               { type: 'text', text: `latitude: ${event.message.latitude}, longitude: ${event.message.longitude}` },
               { type: 'text', text: `address: ${event.message.address}` }
            ]
         }
         return null

      default:
         return null
   }
}

module.exports = getSourceTypeReply
