let express = require("express");
let Lnews = require("../model/lnewsModel");
let lnewsRouting = express.Router();

lnewsRouting.post("/lnews", async (req, res) => {
  let lnews = new Lnews(req.body);
  let result = await lnews.save();
  res.send(result);
});

lnewsRouting.get("/lnews", async (req, res) => {
  let lnews = await Lnews.find();
  res.send(lnews);
});

module.exports = lnewsRouting;
