# Node Exercise using Star Wars API
A little exercise using a Star Wars API [https://swapi.dev/](https://swapi.dev/) and [express.js](https://expressjs.com/)

## Prerequisites
The application requires the following to run:
```
yarn or npm
node.js
```

## Installation
```
git clone
yarn install
yarn start || yarn start:watch
```

## Testing
Use an http request client of your choice (ie Postman)
Endpoints:
```
localhost:3000/planets
localhost:3000/people/
localhost:3000/people/?sortBy=name
localhost:3000/people/?sortBy=height
localhost:3000/people/?sortBy=mass
```

## Goal
We want to know that you can: 
* Consume and manipulate API data 
* Use pagination to get the complete list of all of a resource at once.  (Swapi's people endpoint returns 10 at a time by default.  We need the full list of 82)
* Keep the task simple.  (Don't engineer for all possible future solutions, just solve the task at hand).
* Sort an array of objects.
* Replace object field values with more appropriate data.

## Task
* Make an express server that exposes the following 2 endpoints
```
/people
/planets
```
*  The people endpoint must return all people, and must take an optional query param "sortBy" that allows the array to be sorted by 'name', 'height', or 'mass'.
 
*  The planets endpoint must return all planets but we would like the residents field on each planet to be replaced with the residents full names instead of the default from SWAPI which is links to each resident. (don't worry about sorting this one)
