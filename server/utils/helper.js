const axios = require('axios');
const Promise = require('bluebird');

const getAllPeople = async () => {
  let people = [];

  const link = 'http://swapi.dev/api/people/';

  try {
    const pageData = await axios.get(link)
    let { next, results } = pageData.data;

    people = people.concat(results);

    while (next !== null) {
      const nextPageData = await axios.get(next);
      next = nextPageData.data.next;
      results = nextPageData.data.results;
      people = people.concat(results);
    }
  } catch(err) {
    console.log('Failed to complete get request to http://swapi.dev with error: ' + err);
  }

  return people;
}

const getAllPlanets = async () => {
  let planets = [];
  
  const link = 'http://swapi.dev/api/planets';

  try {
    const pageData = await axios.get(link)
    let { next, results } = pageData.data;

    planets = planets.concat(results);

    while (next !== null) {
      const nextPageData = await axios.get(next);
      next = nextPageData.data.next;
      results = nextPageData.data.results;
      planets = planets.concat(results);
    }
  } catch(err) {
    console.log('Failed to complete get request to http://swapi.dev with error: ' + err);
  }

  if (planets.length > 0) {
    // Modify resident links to resident names
    const updateResidentNames = (planets) => {
      return Promise.all(
        planets.map(async planet => {
          planet.residents = await getResidentNames(planet);
          return planet;
        })
      )
    }

    return updateResidentNames(planets);
  }
}

const getResidentNames = async (planet) => {
  const { residents } = planet;
  const requests = residents.map(url => axios.get(url));

  return axios
    .all(requests)
    .then(axios.spread((...responses) => {
      return responses.map(resident => resident.data.name)
    }))
    .catch(err => console.log('Failed to complete get request to http://swapi.dev with error: ' + err));
}

module.exports = {
  getAllPeople,
  getAllPlanets
}