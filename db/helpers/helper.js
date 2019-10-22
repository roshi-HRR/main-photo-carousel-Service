let db = require('../index.js');

const getPhotos = async function() {
  // db.find((err, result) => {
  //   if(err) {
  //     callback(err)
  //   } else {
  //     callback(null, result)
  //   }
  // }).limit(12)
  //let random = Math.floor(Math.random() * Math.floor(36))
  let result = await db.find().limit(36)
  return result
}

module.exports.getPhotos = getPhotos;