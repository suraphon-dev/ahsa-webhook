const { getTextReply, getImageReply, getStickerReply, getLocationReply, getVideoReply, getFileReply, getAudioReply } = require('../event/message')

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
      case 'text':
         return getTextReply(sourceType, sourceText)

      case 'image':
         return getImageReply(sourceType)

      case 'sticker':
         return getStickerReply(sourceType, event.message.keywords)

      case 'location':
         return getLocationReply(sourceType, event.message.latitude, event.message.longitude, event.message.address)

      case 'video':
         return getVideoReply(sourceType)

      case 'audio':
         return getAudioReply(sourceType)

      case 'file':
         return getFileReply(sourceType, event.message.fileName, event.message.fileSize)

      default:
         return client.replyMessage(event.replyToken, {
            type: 'text',
            text: 'ผมยังไม่รองรับข้อความประเภทนี้ครับ 🙏'
         })
   }
}

module.exports = getSourceTypeReply
