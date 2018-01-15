module.exports.run = (bot, message, args, discord) => {
  require('request')('http://api.adviceslip.com/advice', function(error, response, body) {
    if (!error && response.statusCode == 200) {
      message.channel.send(`**Advice:**\n\n ${JSON.parse(body).slip.advice}`)
    } else {
      message.channel.send(`**Advice:**\n I couldn't think of any advice...`)
    }
  });
}

module.exports.help = {
  name: "advice",
  usage: ``,
  information: "I'll give you some great advice, I'm just too kind."
}
