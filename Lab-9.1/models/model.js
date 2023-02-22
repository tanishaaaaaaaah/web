const mongoose = require("mongoose");

const alienSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Alien", alienSchema);
