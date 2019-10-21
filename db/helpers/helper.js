let db = require('../index.js');

const getPhotos = async function() {
  // db.find((err, result) => {
  //   if(err) {
  //     callback(err)
  //   } else {
  //     callback(null, result)
  //   }
  // }).limit(12)

  let result = await db.find().limit(12)
  return result
}

module.exports.getPhotos = getPhotos;