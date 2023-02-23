const mongoose = require("mongoose");

const alienSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Alien", alienSchema);
