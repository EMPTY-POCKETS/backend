const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const moltin = require('@moltin/sdk');

const port = process.env.PORT || 9000;

// set up middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
