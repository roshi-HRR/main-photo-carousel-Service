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

  let result = await db.find().limit(50)
  return result
}


const getHouseById = (id, callback) => {
  db.find({ id }, (err, docs) => {
    callback(err, docs);
  });
};
// const getHouseById = async function(id , callback) {
//   let result = await db.find({id}, (err, docs) => {
//     callback(err, docs);
//   })
//   return result;
// }



module.exports.getPhotos = getPhotos;
module.exports.getHouseById = getHouseById;