module.exports.run = (bot, message, args) => {
  require('request')('https://www.fmylife.com/random', function(error, response, body) {
	if (!error && response.statusCode == 200) {
	  message.channel.send(`**FML:**\n\n${JSON.parse(body).joke}`)
    } else {
      message.channel.send(`**FML:**\n\n I couldn't think of an FML...`)
    }
  });
}

module.exports.help = {
  name: "fml",
  usage: ``,
  information: "I'll get a random fml for ya."
}

module.exports.settings = {
  permission: "All",
  deleteresponder: true,
  category: "Fun"
}
