const config = require('../config.json')
const prefix = config.prefix

module.exports.run = (bot, message, args) => {
  if (message.author.id == config.ownerid) {
    message.channel.send(":wave: Hulkbot will now restart.")
    setTimeout(function() {
      process.exit(666);
      process.start(666);
    }, 10010)
  } else {
    message.channel.send("Nope!")
  }
 }


module.exports.help = {
  name: "restart",
  usage: ``,
  information: ""
}
