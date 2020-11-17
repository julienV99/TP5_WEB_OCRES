var express = require('express');
var router = express.Router();

const API_KEY = 'dea682f4';
const API_URL = 'http://www.omdbapi.com/';

// const db = [{

// Title:"Guardians of the Galaxy Vol. 2",
// Year:"2017",
// Rated:"PG-13","Released":"05 May 2017","Runtime":"136 min","Genre":"Action, Adventure, Comedy, Sci-Fi","Director":"James Gunn",
// Writer:"James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
// Actors:"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
// Plot:"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
// Language:"English",
// Country:"USA",
// Awards:"Nominated for 1 Oscar. Another 15 wins & 56 nominations.",
// Poster:"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg", 
// Ratings:[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"67/100"}],
// Metascore:"67",
// imdbRating:"7.6",
// imdbVotes:"556,178",
// imdbID:"tt3896198",
// Type:"movie",
// DVD: "N/A",
// BoxOffice:"N/A",
// Production:"Marvel Studios, Walt Disney Pictures",
// Website:"N/A",
// Response:"True"},
// ];

const db = [{
	Titre: "blabla",
	id : "0",
}];

/* GET movies listing. */
router.get('/', (req, res) => {
  // Get List of user and return JSON
  res.status(200).json({ movies });
});

/* GET one movie (by the id). */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // Find user in DB
  const movie = _.find(movies, ["id", id]);
  // Return user
  res.status(200).json({
    message: 'Movie found!',
    movie 
  });
});

/* PUT new movie. */
router.put('/', (req, res) => {
  // Get the data from request from request
  const { movie } = req.body;
  // Create new unique id
  const id = _.uniqueId();
  // Insert it in array (normaly with connect the data with the database)
  movies.push({ movie, id });
  // Return message
  res.json({
    message: `Just added ${id}`,
    movie: { movie, id }
  });
});

/* DELETE movie. */
router.delete('/:id', (req, res) => {
  // Get the :id of the user we want to delete from the params of the request
  const { id } = req.params;

  // Remove from "DB"
  _.remove(movies, ["id", id]);

  // Return message
  res.json({
    message: `Just removed ${id}`
  });
});

/* UPDATE movie. */
router.post('/:id', (req, res) => {
  // Get the :id of the user we want to update from the params of the request
  const { id } = req.params;
  // Get the new data of the user we want to update from the body of the request
  const { movie } = req.body;
  // Find in DB
  const userToUpdate = _.find(movies, ["id", id]);
  // Update data with new data (js is by address)
  userToUpdate.movie = movie;

  // Return message
  res.json({
    message: `Just updated ${id} with ${movie}`
  });
});

module.exports = router;