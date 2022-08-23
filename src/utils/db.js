const mongoose = require("mongoose");
const uri =
  "mongodb+srv://dbshivam:dbshivam@cluster0.9llom.mongodb.net/DBLogger?retryWrites=true";
const connectDB = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true })
    console.log("Mongodb connected...");
  } catch (error) {
    console.log("Error connecting the mongodb...", error);
  }
};
module.exports = connectDB;
