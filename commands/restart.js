const config = require('../config.json')
const file = require('../bot.js')
module.exports.run = (bot, message, args) => {
  if (message.author.id == config.ownerid) {
    message.channel.send(":wave: Hulkbot will now restart.")
    process.kill('SIGTERM')
  } else {
    message.channel.send("Nope!")
  }
}

module.exports.help = {
  name: "restart",
  usage: ``,
  information: "Owner only."
}
