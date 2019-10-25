const express = require('express');
let app = express();
const port = 3333;

//require
const db = require('../db/index.js');
const bodyParser = require('body-parser');
const {getPhotos, getHouse} = require('../db/helpers/helper.js');
const helpers = require('../db/helpers/helper.js');

//app.use
app.use(express.static('public'))

//app.get
app.get('/api/photos', async (req, res) => {
  try {
  let response = await getPhotos()
  
  res.status(200).send(response)
  } catch(err) {
    res.status(500).send(err)
  }
  
})


app.get('/api/photos/:id', (req, res) => {
  console.log(req.params.id)
  helpers.getHouseById(req.params.id, (err, results) => {
    try {
   //   console.log(results)
      res.send(results);
    } catch (err) {
      console.error(err);
    }
  });
});

module.exports = app