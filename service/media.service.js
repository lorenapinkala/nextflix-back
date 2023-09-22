const axios = require("axios");
require("dotenv").config();


class MediaService {

  static async genres() {
    try {

      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/genre/movie/list',
        params: { language: 'en' },
        headers: {
          accept: 'application/json',
          Authorization: process.env.API_TOKEN
        }
      };

      const { data } = await axios.request(options);

      return data.genres;
    } catch (error) {
      console.error(error);
    }
  }

  static async searchMovie(name) {
    try {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
        headers: {
          accept: 'application/json',
          Authorization: process.env.API_TOKEN
        }
      };

      const { data } = await axios.request(options);

      return data.results;
    } catch (error) {
      console.error(error);
    }
  }

  static async searchMoviePop() {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        headers: {
          accept: 'application/json',
          Authorization: process.env.API_TOKEN
        }
      };

      const { data } = await axios.request(options);

      return data.results;
    } catch (error) {
      console.error(error);
    }
  }

  static async topRatedMovie() {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',
        headers: {
          accept: 'application/json',
          Authorization: process.env.API_TOKEN
        }
      };
      const { data } = await axios.request(options);

      return data.results;
    } catch (error) {
      console.error(error);
    }
  }

  static async upcomingMovie() {
    try {

      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        headers: {
          accept: 'application/json',
          Authorization: process.env.API_TOKEN
        }
      };

      const { data } = await axios.request(options);

      console.log(data.results)
      return data.results;
    } catch (error) {
      console.error(error);
    }
  }

  static async getById(id) {
    try {
      const { data } = await axios.request(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`);

      console.log(data)
      
      return data;
    } catch (error) {
      console.error(error);
    }
  }


  static async getByGenre(id) {
    try {

      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        headers: {
          accept: 'application/json',
          Authorization: process.env.API_TOKEN
        }
      };

      const { data } = await axios.request(options);
      const {results} = data;

      const intId = parseInt(id);

      const filteredMovies = results.filter(movie => movie.genre_ids.includes(intId));
      console.log(filteredMovies)

      return filteredMovies;
    } catch (error) {
      console.error(error);
    }
  }


  static async searchSerie(name) {
    try {

      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/tv?query=${name}&include_adult=false&language=en-US&page=1`,
        headers: {
          accept: 'application/json',
          Authorization: process.env.API_TOKEN
        }
      };

      const response = await axios.request(options);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  static async tvPop() {
    try {

      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
        headers: {
          accept: 'application/json',
          Authorization: process.env.API_TOKEN
        }
      };

      const response = await axios.request(options);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  static async tvRated() {
    try {

      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
        headers: {
          accept: 'application/json',
          Authorization: process.env.API_TOKEN
        }
      };

      const response = await axios.request(options);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = MediaService;