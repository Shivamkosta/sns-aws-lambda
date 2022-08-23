"use strict";
const connectDB = require("./utils/db");
const Logger = require("./models/loggerSchema");
var cachedDb = null;
module.exports.logger = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    if (!cachedDb) {
      cachedDb = await connectDB();
    }
    for (let i = 0; i < event.Records.length; i++) {
      const item = event.Records[i]
      let resp = JSON.parse(item.Sns.Message);
      let obj = {
        user_name: resp.user_name,
        timestamp: resp.timestamp,
        ip: resp.ip,
        response_size: resp.response_size,
        response_status: resp.response_status,
        url: resp.url
      };
      let d = await Logger.create(obj);
      console.log("data saved sucessfullly!", d);
    }
    
  } catch (error) {
    console.log(error);
  }
};
