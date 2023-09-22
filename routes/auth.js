const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth.controller");
const AuthMiddleware = require("../middleware/auth.middelware");

router.get("/me", AuthMiddleware.validateAuth, (req, res) => res.send(req.user));
router.post("/signup", AuthController.register);
router.post("/login", AuthController.signIn);
router.post("/logout", AuthController.logOut);

module.exports = router;
