const MediaService = require("../service/media.service");

class MediaController{

      static async genres(req, res, next) {
        try {
          const genres= await MediaService.genres();
          res.status(200).send(genres);
          res.sendStatus(404);
        } catch (error) {
          next();
        }
      }

      static async searchMovie(req, res, next) {
        try {
          const {name} = req.params
          const movie= await MediaService.searchMovie(name);
          res.status(200).send(movie);
          res.sendStatus(404);
        } catch (error) {
          next();
        }
      }

      static async searchMoviePop(req, res, next) {
        try {
          const popMovies= await MediaService.searchMoviePop();
          res.status(200).send(popMovies);
          res.sendStatus(404);
        } catch (error) {
          next();
        }
      }

      static async topRatedMovie(req, res, next) {
        try {
          const topMovies= await MediaService.topRatedMovie();
          res.status(200).send(topMovies);
          res.sendStatus(404);
        } catch (error) {
          next();
        }
      }

      static async upcomingMovie(req, res, next) {
        try {
          const upcoming= await MediaService.upcomingMovie();
          res.status(200).send(upcoming);
          res.sendStatus(404);
        } catch (error) {
          next();
        }
      }

      static async getById(req, res, next) {
        try {
          const {id} = req.params
          const oneMovie= await MediaService.getById(id);
          res.status(200).send(oneMovie);
          res.sendStatus(404);
        } catch (error) {
          next();
        }
      }

      static async getByGenre(req, res, next) {
        try {
          const {id} = req.params
          const movieByGenre= await MediaService.getByGenre(id);
          res.status(200).send(movieByGenre);
          res.sendStatus(404);
        } catch (error) {
          next();
        }
      }

      static async searchSerie(req, res, next) {
        try {
          const serie= await MediaService.searchSerie(req.body);
          res.status(200).send(serie);
          res.sendStatus(404);
        } catch (error) {
          next();
        }
      }

      static async tvPop(req, res, next) {
        try {
          const popTv= await MediaService.tvPop();
          res.status(200).send(popTv);
          res.sendStatus(404);
        } catch (error) {
          next();
        }
      }

      static async tvRated(req, res, next) {
        try {
          const rated= await MediaService.tvRated();
          res.status(200).send(rated);
          res.sendStatus(404);
        } catch (error) {
          next();
        }
      }
}

module.exports = MediaController;