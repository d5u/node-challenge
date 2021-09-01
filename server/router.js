const router = require('express').Router();
const axios = require('axios');
const { getAllPeople } = require('./utils/helper');

router
  .route('/people')
  .get(async (req, res) => {
    const people = await getAllPeople();

    people.length > 0 ? res.status(200).json(people) : res.status(400).send('Error: Unable to find list of all people');
  });

router
  .route('/planets')


module.exports = router;