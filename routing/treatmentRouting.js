let express = require("express");
let Treatment = require("../model/treatmentModel");
let treatmentRouting = express.Router();

treatmentRouting.post("/treatment", async (req, res) => {
  let treatment = new Treatment(req.body);
  let result = await treatment.save();
  res.send(result);
});

treatmentRouting.get("/treatment", async (req, res) => {
  let treatment = await Treatment.find();
  res.send(treatment);
});

treatmentRouting.get("/treatment/:tid", async (req, res) => {
  let treatment = await Treatment.findOne({ _id: req.params.tid });
  res.send(treatment);
});

treatmentRouting.delete("/treatment/:tid", async (req, res) => {
  let treatment = await Treatment.deleteOne({ _id: req.params.tid });
  res.send(treatment);
});

treatmentRouting.put("/treatment/:tid", async (req, res) => {
  let treatment = await Treatment.updateOne(
    { _id: req.params.tid },
    { $set: req.body }
  );
  res.send(treatment);
});

module.exports = treatmentRouting;
