const User = require("../models/User");
const bcrypt = require("bcrypt");

class UserService {

  static async createUser(body) {
    try {
      let user = new User(body);
      return await user.save({ password: 0 });
    } catch (error) {
      console.error("error in createUser:", error.message);
    }
  }

  static async updateUser(id, { password, username }) {
    try {
      const salt = bcrypt.genSaltSync();
      return await User.findByIdAndUpdate(
        id,
        {
          $set: {
            password: password && bcrypt.hashSync(password, 8),
            username,
          },
        },
        { new: true }
      ).select({ password: 0 });
    } catch (error) {
      console.error("Error while updating the user:", error.message);
      throw error;
    }
  }

  static async unsubscribeUser(id, { userStatus }) {
    try {
      return await User.findByIdAndUpdate(
        id,
        {
          $set: {
            userStatus,
          },
        },
        { new: true }
      ).select();
    } catch (error) {
      console.error("Error while unsubscribing the user:", error.message);
      throw error;
    }
  }

  static async findoneUser(id) {
    try {
      
      return await User.findById(id).exec();
  
    } catch (error) {
      console.error("Error while searching for user:", error.message);
      throw error;
    }
  }

  static async findallUser() {
    try {
      
      return await User.find({ userStatus: true}).exec();
  
    } catch (error) {
      console.error("Error while searching for users:", error.message);
      throw error;
    }
  }

  static async addMovie(_id, favorites) {
    try {
      console.log("id ", _id)
      const user = await User.findByIdAndUpdate(
        _id,
        {
          $addToSet: { favorites: favorites },
        },
        { new: true }
      );

      console.log(user.favorites)
      return user;
    }
    catch (error) {
      console.error("Error to add favorite movie:", error.message);
      throw error;
    }
  }

  static async removeMovie(_id, movieId) {
    try {
      const user = await User.findById(_id);

      if (!user) {
        throw new Error('User not found');
      }

      const movieIdNumber = parseInt(movieId, 10);

      const updatedFavorites = user.favorites.filter(
        (favorite) => favorite.id !== movieIdNumber
      );

      user.favorites = updatedFavorites;
      await user.save();

      return user.favorites;
    } catch (error) {
      console.error('Error removing favorite movie:', error.message);
      throw error;
    }
  }


  static async getFavorites(id) {
    try {
      const user = await User.findById(id).exec();

      return user.favorites;
    }
    catch (error) {
      console.error("Error to get favorite movie:", error.message);
      throw error;
    }
  }


}

module.exports = UserService;