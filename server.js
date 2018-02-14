const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const moltin = require('@moltin/sdk');

const port = process.env.PORT || 9000;

// set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// moltin auth stuff
const moltin_id = process.env.MOLTIN_ID || require('./secret/moltin.js').id;
const moltin_secret = process.env.MOLTIN_SECRET || require('./secret/moltin.js').secret;

const Moltin = moltin.gateway({
    client_id: moltin_id,
    client_secret: moltin_secret
});

const products = Moltin.Products.All().then(ret => {
    console.log(ret);
});
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});

module.exports = app;