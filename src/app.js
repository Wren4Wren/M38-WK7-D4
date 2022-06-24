require("./db/connection");

const mongoose = require("mongoose");
const yargs = require("yargs");
const {
  addMovie,
  listMovies,
  deleteMovie,
  deleteAll,
  updateTitle,
  updateActor,
  updateRating,
  updateGenre,
} = require("./movies/movieMethods");
const { collection } = require("./movies/movieModels");

const app = async (yargsObj) => {
  try {
    // Adds a new doc to DB
    if (yargsObj.add) {
      await addMovie({
        title: yargsObj.title,
        actor: yargsObj.actor,
        rating: yargsObj.rating,
        genre: yargsObj.genre,
      });
      console.log(await listMovies());
      // Lists current docs in DB
    } else if (yargsObj.list) {
      console.log(await listMovies());
      // Deletes a doc by title
    } else if (yargsObj.delete) {
      await deleteMovie({ title: yargsObj.title });
      // Deletes all docs in DB
    } else if (yargsObj.deleteAll) {
      await deleteAll(collection);
      // Updates a doc title
    } else if (yargsObj.updateTitle) {
      await updateTitle({ title: yargsObj.title, newTitle: yargsObj.newTitle });
      // Updates a doc actor
    } else if (yargsObj.updateActor) {
      await updateActor({ title: yargsObj.title, newActor: yargsObj.newActor });
      // Updates a doc rating
    } else if (yargsObj.updateRating) {
      await updateRating({
        title: yargsObj.title,
        newRating: yargsObj.newRating,
      });
      // Updates a doc genre
    } else if (yargsObj.updateGenre) {
      await updateGenre({ title: yargsObj.title, newGenre: yargsObj.newGenre });
      // Returns a statement in terminal for incorrect command entered
    } else {
      console.log("Incorrect Command");
    }
    console.log(await listMovies());
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

// COMMANDS - MOVIE
// Add movie: node src/app.js --add --title=""
// List movies: node src/app.js --list
// Delete Movie: node src/app.js --delete --title=""
// Update movie: node src/app.js --updateTitle --title="" --newTitle=""
// Update movie: node src/app.js --updateActor --title="" --newActor=""
// Update movie: node src/app.js --updateRating --title="" --newRating=""
// Update movie: node src/app.js --updateGenre --title="" --newGenre=""

app(yargs.argv);
