const mongoose = require("mongoose");
const config = require("config");

/**
 * Utility function - Used to connect MongoDB using mongoose as abstraction,
 * MONGODBURL will be masked/removed.
 */
const connectDB = async () => {
  try {
    await mongoose.connect(config.get("MONGODBURL"), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("DB connection is successfull");
  } catch (err) {
    console.error("Error connecting to DB");
  }
};

module.exports = connectDB;
