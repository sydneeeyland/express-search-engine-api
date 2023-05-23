const mongoose = require("mongoose");

const connect = async () => {
  try {

    console.log(process.env.MONGO_DB_URI);
    const conn = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Successfully connected to " + conn.connection.host);
  } catch (error) {
    console.log(`MongoDB failed to start ${error}`);
  }
};

module.exports = connect;
