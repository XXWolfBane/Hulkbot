const prefix = "h!"

module.exports.run = (bot, message, args) => {
  require('request')('http://api.fmylife.com/', function(error, response, body) {
	  if (message.content == prefix + "fml") {
	if (!error && response.statusCode == 200) {
	  message.channel.send(`**FML:**\n\n${JSON.parse(body).joke}`)
    } else {
      message.channel.send(`**FML:**\n\n I couldn't think of a FML Joke...`)
    }
}
  });
}

module.exports.help = {
  name: "yomomma",
  usage: ``,
  information: "I'll get a random yo momma joke for you."
}

module.exports.settings = {
  permission: "All",
  deleteresponder: true,
  category: "Fun"
}
