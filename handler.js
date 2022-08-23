'use strict';
const AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: "AKIAW4GPXNJCUPFZP63J",
  secretAccessKey: "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",
  region:'us-east-2'
});
const sns = new AWS.SNS();
const publish = () => {
  const params = {
    Message: JSON.stringify({
      user_name: "Manikant",
      timestamp: 1660826818590,
      ip: "203.166.18.20",
      response_size: 1,
      response_status: 200,
      url: "https://hyblockcapital.com"
    }),
    TopicArn: "arn:aws:sns:us-east-2:472882047557:test",
  }
  sns.publish(params,(err,data) => {
    if(err){
      console.log("Error",err);
    }
    else{
      console.log("success", data);
    }
  })
}
publish()