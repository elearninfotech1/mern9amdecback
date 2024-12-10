let express = require("express");
let User = require("../model/userModel");
let usersRouting = express.Router();

usersRouting.post("/user", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

usersRouting.get("/user", async (req, res) => {
  let user = await User.find();
  res.send(user);
});

usersRouting.delete("/user/:id", async (req, res) => {
  let user = await User.deleteOne({ _id: req.params.id });
  res.send(user);
});

usersRouting.get("/user/:id", async (req, res) => {
  let user = await User.findOne({ _id: req.params.id });
  res.send(user);
});

usersRouting.put("/user/:id", async (req, res) => {
  let user = await User.updateOne({ _id: req.params.id }, { $set: req.body });
  res.send(user);
});

module.exports = usersRouting;
