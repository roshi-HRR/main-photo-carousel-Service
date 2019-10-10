const express = require('express');
let app = express();
const port = 3333;
//require
const db = require('../db/index.js');
const bodyParser = require('body-parser');

//app.use
app.use(express.static('public'))

//app.get
app.get('/photos', (req, res) => {
  res.send('YO')
})


//app.listen

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})