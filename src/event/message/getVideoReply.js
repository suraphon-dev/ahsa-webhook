function getVideoReplyConditionUser() {
   return [{ type: 'text', text: '👤 คุณส่งวิดีโอมาให้ครับ 🎬' }]
}

function getVideoReplyConditionGroup() {
   return [{ type: 'text', text: '👥 คุณส่งวิดีโอมาในกลุ่มครับ 🎬' }]
}

function getVideoReply(sourceType) {
   switch (sourceType) {
      case 'user':
         return getVideoReplyConditionUser()
      case 'group':
         return getVideoReplyConditionGroup()
      default:
         return null
   }
}

module.exports = { getVideoReply }
