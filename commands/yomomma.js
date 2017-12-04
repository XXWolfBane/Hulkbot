module.exports.run = (bot, message, args) => {
  require('request')('http://api.yomomma.info/', function(error, response, body) {
	if (!error && response.statusCode == 200) {
	  message.channel.send(`**YoMomma:**\n\n${JSON.parse(body).joke}`)
    } else {
      message.channel.send(`**YoMomma:**\n\n I couldn't think of a yomomma joke...`)
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
