const User = require("../models/User");
const axios = require("axios");
const { modelName } = require("../models/User");
require("dotenv").config();

class AuthServices {
  static async getUser({ username, email, password }) {
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = AuthServices;