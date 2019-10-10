const faker = require('faker');
const Photo = require('../db/index.js')




let thingsToSeed = [];

for (let i = 1; i < 100; i++) {
  thingsToSeed.push({
    id: i, 
    photoUrl: faker.image.imageUrl(), 
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