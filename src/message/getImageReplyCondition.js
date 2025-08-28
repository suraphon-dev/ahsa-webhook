function getImageReplyConditionUser() {
   return [
      { type: 'text', text: '👤 คุณส่งรูปภาพมาให้ครับ 📷' },
      {
         type: 'image',
         originalContentUrl:
            'https://lineforbusiness.com/files/LINE%20Ghost%20Writing_Content%232_%E0%B8%9F%E0%B8%B5%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%94%20LINE%20OA_Thumbnail.jpg',
         previewImageUrl:
            'https://lineforbusiness.com/files/LINE%20Ghost%20Writing_Content%232_%E0%B8%9F%E0%B8%B5%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%94%20LINE%20OA_Thumbnail.jpg'
      }
   ]
}

function getImageReplyConditionGroup() {
   return [
      { type: 'text', text: '👤 คุณส่งรูปภาพมาให้ในกลุ่มครับ 📷' },
      {
         type: 'image',
         originalContentUrl:
            'https://contentshifu.com/wp-content/uploads/2025/01/20241223-143859.jpeg',
         previewImageUrl:
            'https://contentshifu.com/wp-content/uploads/2025/01/20241223-143859.jpeg'
      }
   ]
}

module.exports = {
   getImageReplyConditionUser,
   getImageReplyConditionGroup
}
