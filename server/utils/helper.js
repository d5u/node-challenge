const axios = require('axios');

const getAllPeople = async () => {
  let people = [];

  const link = 'http://swapi.dev/api/people/';

  const pageData = await axios.get(link)
  let {next, results} = pageData.data;

  people = people.concat(results);

  try {
    while (next !== null) {
      const nextPageData = await axios.get(next);
      next = nextPageData.data.next;
      results = nextPageData.data.results;
      people = people.concat(results);
    }
  } catch(err) {
    console.log('Failed to request from http://swapi.dev with error: ' + error);
  }

  return people;
}

module.exports = {
  getAllPeople
}