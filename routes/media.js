const express = require("express");
const router = express.Router();

const MediaController = require("../controllers/media.controller");

//traer todos los generos de peliculas
router.get("/genre", MediaController.genres);


// peliculas


// search by name
router.get("/searchmovie/:name", MediaController.searchMovie);

//get pop movies
router.get("/movie/popular", MediaController.searchMoviePop);

// get top movies
router.get("/movie/top", MediaController.topRatedMovie);

// get upcomming movies
router.get("/movie/upcoming", MediaController.upcomingMovie);

// get a movie
router.get("/movie/description/:id", MediaController.getById);

// get a movies by genre
router.get("/movie/genre/:id", MediaController.getByGenre);



module.exports = router;
