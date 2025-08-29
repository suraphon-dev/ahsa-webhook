function getAudioReplyConditionUser() {
   return [{ type: 'text', text: '👤 คุณส่งไฟล์เสียงมาให้ครับ 🔊' }]
}

function getAudioReplyConditionGroup() {
   return [{ type: 'text', text: '👥 คุณส่งไฟล์เสียงมาในกลุ่มครับ 🔊' }]
}

function getAudioReply(sourceType) {
   switch (sourceType) {
      case 'user':
         return getAudioReplyConditionUser()
      case 'group':
         return getAudioReplyConditionGroup()
      default:
         return null
   }
}

module.exports = { getAudioReply }
