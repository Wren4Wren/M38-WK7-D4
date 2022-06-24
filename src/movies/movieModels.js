const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  actor: {
    type: Array,
  },
  rating: {
    type: String,
  },
  genre: {
    type: Array,
  },
});

const Movie = mongoose.model("Movie", filmSchema);

module.exports = Movie;
