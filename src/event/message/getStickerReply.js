function getStickerReplyConditionUser(keywords) {
   return [
      { type: 'text', text: '👤 คุณส่งสติกเกอร์มาให้ครับ 🎉' },
      { type: 'text', text: `keywords: ${keywords}` }
   ]
}

function getStickerReplyConditionGroup(keywords) {
   return [
      { type: 'text', text: '👥 คุณส่งสติกเกอร์มาให้ในกลุ่มครับ 🎉' },
      { type: 'text', text: `keywords: ${keywords}` }
   ]
}

function getStickerReply(sourceType, keywords) {
   switch (sourceType) {
      case 'user':
         return getStickerReplyConditionUser(keywords)
      case 'group':
         return getStickerReplyConditionGroup(keywords)
      default:
         return null
   }
}

module.exports = { getStickerReply }
