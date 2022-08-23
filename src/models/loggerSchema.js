const mongoose = require("mongoose");

const LoggerSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      unique: true,
      required: true,
    },
    timestamp: {
      type: Number, 
      default: (new Date()).getTime(),
    },
    ip: {
      type: String,
      validate: {
        validator: function (ipaddress) {
          return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
            ipaddress
          );
        }
      },
      required: true,
    },
    response_size: {
      type: Number,
      Default: 0,
    },
    response_status: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { collection: "apilogger" }
);

const Logger = mongoose.model("Logger", LoggerSchema);
module.exports = Logger;
