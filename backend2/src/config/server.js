const dotenv = require('dotenv');
dotenv.load({path: '.env.dev'});

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const queryParser = require('express-query-int');
const PORT = process.env.PORT || 3000;

server.use(bodyParser.urlencoded({extend: true}));
server.use(bodyParser.json());
server.use(require('./cors'));
server.use(queryParser());

server.listen(PORT, () => {
    console.log(`BAckend is running on port: ${PORT}`);
});

module.exports = server;
