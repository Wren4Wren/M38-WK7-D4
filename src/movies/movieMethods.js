const mongoose = require("mongoose");
const { array } = require("yargs");
const yargs = require("yargs");
const Movie = require("./movieModels");

exports.addMovie = async (movieObj) => {
  try {
    await Movie.create(movieObj);
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async () => {
  try {
    return await Movie.find({});
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (movieObj) => {
  try {
    const response = await Movie.deleteOne(movieObj);
    console.log(response.deletedCount > 0);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteAll = async () => {
  try {
    const response = await Movie.deleteMany({});
    console.log(response.deletedCount > 0);
  } catch (error) {
    console.log(error);
  }
};

exports.updateTitle = async (movieObj) => {
  try {
    const response = await Movie.findOneAndUpdate(
      { title: movieObj.title },
      { $set: { title: movieObj.newTitle } },
      { new: true }
    );
    console.log(response.modifiedCount > 0);
  } catch (error) {
    console.log(error);
  }
};
exports.updateActor = async (movieObj) => {
  try {
    const response = await Movie.findOneAndUpdate(
      { title: movieObj.title },
      { $set: { actor: movieObj.newActor } },
      { new: true }
    );
    console.log(response.modifiedCount > 0);
  } catch (error) {
    console.log(error);
  }
};
exports.updateRating = async (movieObj) => {
  try {
    const response = await Movie.findOneAndUpdate(
      { title: movieObj.title },
      { $set: { rating: movieObj.newRating } },
      { new: true }
    );
    console.log(response.modifiedCount > 0);
  } catch (error) {
    console.log(error);
  }
};
exports.updateGenre = async (movieObj) => {
  try {
    const response = await Movie.findOneAndUpdate(
      { title: movieObj.title },
      { $set: { genre: movieObj.newGenre } },
      { new: true }
    );
    console.log(response.modifiedCount > 0);
  } catch (error) {
    console.log(error);
  }
};
