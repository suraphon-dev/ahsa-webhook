function getFileReply(sourceType, fileName, fileSize) {
   switch (sourceType) {
      case 'user':
         return { type: 'text', text: `👤 คุณส่งไฟล์: ${fileName} (${fileSize} bytes)` }
      case 'group':
         return { type: 'text', text: `👥 คุณส่งไฟล์ในกลุ่ม: ${fileName} (${fileSize} bytes)` }
      default:
         return null
   }
}

module.exports = { getFileReply }
