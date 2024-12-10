let mongoose = require("mongoose");
let treatmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("treatments", treatmentSchema);
