const config = require('../config.json')
const file = require('../bot.js')
module.exports.run = (bot, message, args) => {
  if (message.author.id == config.ownerid) {
    message.channel.send(":wave: Hulkbot will now restart.")
    setTimeout(() => {
      bot.destroy()
    }, 5000)
    setTimeout(() => {
      bot.login(process.env.token)
    }, 5000)
  } else {
    message.channel.send("Nope!")
  }
}

module.exports.help = {
  name: "restart",
  usage: ``,
  information: "Owner only."
}
