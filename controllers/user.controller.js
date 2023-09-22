const User = require("../models/User");
const UserService = require("../service/user.service");

class UserController {
  static async createUser(req, res, next) {
    try {
      const user = await UserService.createUser(req.body);
      user && res.status(201).send(user);
      user || res.sendStatus(404);
    } catch (error) {
      next();
    }
  }


  static async updateUser(req, res, next) {
    try {
      const _id = req.params._id;
      const { username, password } = req.body;
      const user = await UserService.updateUser(_id, {
        username,
        password,
      });
      res.status(200).send(user);
    } catch (error) {
      next();
    }
  }

  static async unsubscribeUser(req, res, next) {
    try {
      const _id = req.params._id;
      const { userStatus } = req.body;
      const user = await UserService.unsubscribeUser(_id, {
        userStatus
      });
     
      res.status(200).send(user);
    } catch (error) {
      next();
    }
  }

  static async findoneUser(req, res, next) {
    try {
      const _id = req.params._id;
      const user = await UserService.findoneUser(_id);
      res.status(200).send(user);
    } catch (error) {
      next();
    }
  }

  static async findallUser(req, res, next) {
    try {
      const user = await UserService.findallUser();
      
      res.status(200).send(user);
    } catch (error) {
      next();
    }
  }

  static async addMovie(req, res, next) {
    try {
      const _id = req.params._id;
      const user = await UserService.addMovie(_id, req.body);
      res.status(201).send(user);
    } catch (error) {
      next();
    }
  }

  static async removeMovie(req, res, next) {
    try {
      const {_id, movieId} = req.params;
      const user = await UserService.removeMovie(_id, movieId);
      res.status(200).send(user);
    } catch (error) {
      next();
    }
  }

  static async getFavorites(req, res, next) {
    try {
      const _id = req.params._id;
      const favorites = await UserService.getFavorites(_id);
      res.status(200).send(favorites);
    } catch (error) {
      next();
    }
  }


}

module.exports = UserController;