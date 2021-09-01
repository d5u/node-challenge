const router = require('express').Router();
const axios = require('axios');
const { getAllPeople } = require('./utils/helper');

router
  .route('/people')
  .get(async (req, res) => {
    const sortBy = req.query.sortBy;
    const people = await getAllPeople();
    
    // If sortBy query exists, sort people by name, height, or mass
    if (sortBy && people.length > 0) {
      // ensure param is a string and lowercase
      switch (String(sortBy).toLowerCase()) {
        case 'name':
          people.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'height':
        case 'mass':
          people.sort((a, b) => a[sortBy] - b[sortBy]);
          break;
        default:
          res.send('Error: Invalid query parameter').status(422);
      }
    }

    people.length > 0 ? res.status(200).json(people) : res.send('Error: Unable to find list of all people').status(400);
  });

router
  .route('/planets')


module.exports = router;