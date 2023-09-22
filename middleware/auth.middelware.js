require("dotenv").config();
const jwt = require("jsonwebtoken");

class AuthMiddleware {
  static validateAuth(req, res, next) {

    const tokenString = (req.headers.authorization).split(' ');
    const token = tokenString[1];


    console.log("aca mensaje desde el auth middleware: token: ",token)
    if (!token) return res.sendStatus(401);

    const  user  = jwt.verify(token, process.env.SECRET);

    
    if (!user) return res.sendStatus(401);

    req.user = user;

    next();
  }
}

module.exports = AuthMiddleware;
