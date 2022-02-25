const twit = require('twit');
const config = require('./config.js');

const Twitter = new twit(config);

let messages = ["Hello World!", "War is Bad", "No Citizen Anywhere in the Entire World Wants a War"];
let messageLocation = 0;

const writeTweet = function() {
    Twitter.post('statuses/update', {
        status: messages[messageLocation]
    }, function(err, data, response) {
        console.log(data)
    });
    messageLocation += 1;
}

setInterval(writeTweet, 30000);