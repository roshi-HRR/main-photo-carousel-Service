const faker = require('faker');
const Photo = require('../db/index.js')




let thingsToSeed = [];
let random = Math.floor(Math.random() * Math.floor(36))
for (let i = 1; i < 100; i++) {
  thingsToSeed.push({
    id: i, 
    photoUrl: `https://emilymeeksmainphoto.s3.amazonaws.com/${Math.floor(Math.random() * Math.floor(36))}`, 
    description: faker.lorem.sentence()
  })

}
 
Photo.deleteMany((err) => {
  if(err){
    console.error(err)
  } else {
    Photo.insertMany(thingsToSeed)
  }
})