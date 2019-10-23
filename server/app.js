const express = require('express');
let app = express();
const port = 3333;

//require
const db = require('../db/index.js');
const bodyParser = require('body-parser');
const {getPhotos} = require('../db/helpers/helper.js')

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

module.exports = app