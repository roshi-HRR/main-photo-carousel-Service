const faker = require('faker');
const Photo = require('../db/index.js')




let thingsToSeed = [];
let random = Math.floor(Math.random() * Math.floor(36))


for (let i = 1; i < 100; i++) {
  let url = `https://emilymeeksmainphoto.s3.amazonaws.com/${Math.floor(Math.random() * Math.floor(10))}`;
  thingsToSeed.push({
    id: i, 
    //need 10 pictures for each photoUrl array []
    photoUrl: [`https://emilymeeksmainphoto.s3.amazonaws.com/${Math.floor(Math.random() * Math.floor(10))}`, `https://emilymeeksmainphoto.s3.amazonaws.com/${Math.floor(Math.random() * Math.floor(10))}`, `https://emilymeeksmainphoto.s3.amazonaws.com/${Math.floor(Math.random() * Math.floor(10))}`, `https://emilymeeksmainphoto.s3.amazonaws.com/${Math.floor(Math.random() * Math.floor(10))}`, `https://emilymeeksmainphoto.s3.amazonaws.com/${Math.floor(Math.random() * Math.floor(10))}`, `https://emilymeeksmainphoto.s3.amazonaws.com/${Math.floor(Math.random() * Math.floor(10))}`, `https://emilymeeksmainphoto.s3.amazonaws.com/${Math.floor(Math.random() * Math.floor(10))}`, `https://emilymeeksmainphoto.s3.amazonaws.com/${Math.floor(Math.random() * Math.floor(10))}`, `https://emilymeeksmainphoto.s3.amazonaws.com/${Math.floor(Math.random() * Math.floor(10))}`, `https://emilymeeksmainphoto.s3.amazonaws.com/${Math.floor(Math.random() * Math.floor(10))}`], 
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