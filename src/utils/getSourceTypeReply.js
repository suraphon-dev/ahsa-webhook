const { getTextReplyConditionUser, getTextReplyConditionGroup } = require('../message/getTextReplyCondition')
const { getImageReplyConditionUser, getImageReplyConditionGroup } = require('../message/getImageReplyCondition')
const { getStickerReplyConditionUser, getStickerReplyConditionGroup } = require('../message/getStickerReplyCondition')

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
         switch (sourceType) {
            case 'user':
               return getStickerReplyConditionUser(event.message.keywords)
            case 'group':
               return getStickerReplyConditionGroup(event.message.keywords)
            default:
               return null
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

      // วิดีโอ
      case 'video':
         switch (sourceType) {
            case 'user':
               return { type: 'text', text: '👤 คุณส่งวิดีโอมา 🎬' }
            case 'group':
               return { type: 'text', text: '👥 คุณส่งวิดีโอมาในกลุ่ม 🎬' }
            default:
               return null
         }

      // เสียง
      case 'audio':
         return { type: 'text', text: 'คุณส่งไฟล์เสียงมา 🔊' }

      // ไฟล์
      case 'file':
         return { type: 'text', text: `คุณส่งไฟล์: ${message.fileName} (${message.fileSize} bytes)` }

      default:
         return client.replyMessage(event.replyToken, {
            type: 'text',
            text: 'ผมยังไม่รองรับข้อความประเภทนี้ครับ 🙏'
         })
   }
}

module.exports = getSourceTypeReply
