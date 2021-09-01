const express = require('express');
const parser = require('body-parser');
const router = require('./router');

const server = express();
const port = 3000;

server.use(parser.json());
server.use('/', router);

server.listen(port, () => console.log(`Server is listening on port: ${port}`));
