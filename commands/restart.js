const config = require('../config.json')
const prefix = config.prefix

module.exports.run = (bot, message, args) => {
if (message.content == prefix + "shutdown") {
  if (message.author.id == config.ownerid) {
    message.channel.send(":wave: Hulkbot will now shutdown.")
    setTimeout(function() {
      process.exit(666);
    }, 10010)
  } else {
    message.channel.send("Nope!")
  }
 }
}

module.exports.help = {
  name: "restart",
  usage: ``,
  information: ""
}
