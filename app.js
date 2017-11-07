const express = require('express');
const cors = require('cors');
const session = require('express-sessions');

const app = express();


app.use(cors('*'))


module.exports = app;