require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('./build/'));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//trigger build
module.exports = app;

require('./server/routes');
