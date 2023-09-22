const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");


router.post("/", UserController.createUser);

//update a user
router.put("/update/:_id", UserController.updateUser);

//unsubscribe a user
router.put("/unsubscribe/:_id", UserController.unsubscribeUser);

//get an user
router.get("/findone/:_id", UserController.findoneUser);

//get all users
router.get("/findall", UserController.findallUser);

//adding a movie-- id del usuario
router.post("/add/:_id", UserController.addMovie);

//delete a movie from favorites-- id del usuario- id de la peli
router.delete("/unsuscribe/:_id/:movieId", UserController.removeMovie);


router.get("/favorite/:_id", UserController.getFavorites);

module.exports = router;