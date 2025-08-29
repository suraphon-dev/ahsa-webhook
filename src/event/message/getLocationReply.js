function getLocationReplyConditionUser(latitude, longitude, address) {
   return [
      { type: 'text', text: '👤 คุณส่งตำแหน่งของคุณมาให้ครับ 📍' },
      { type: 'text', text: `latitude: ${latitude}, longitude: ${longitude}` },
      { type: 'text', text: `address: ${address}` }
   ]
}

function getLocationReplyConditionGroup(latitude, longitude, address) {
   return [
      { type: 'text', text: '👥 คุณส่งตำแหน่งของกลุ่มมาให้ครับ 📍' },
      { type: 'text', text: `latitude: ${latitude}, longitude: ${longitude}` },
      { type: 'text', text: `address: ${address}` }
   ]
}

function getLocationReply(sourceType, latitude, longitude, address) {
   if (sourceType === 'user') {
      return getLocationReplyConditionUser(latitude, longitude, address)
   } else if (sourceType === 'group') {
      return getLocationReplyConditionGroup(latitude, longitude, address)
   }
   return null
}

module.exports = { getLocationReply }
