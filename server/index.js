const express = require('express');
const parser = require('body-parser');

const server = express();
const port = 3000;

server.get('/', (req, res) => {
  res.status(200).send('Hello World!');
})

server.listen(port, () => console.log(`Server is listening on port: ${port}`));
