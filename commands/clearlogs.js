const config = require('../config.json')

module.exports.run = (bot, message, args) => {
  if (message.channel.id == config.logid) {
    if (message.content == prefix + "clearlogs") {
      message.channel.send("h!purge 90")
    }
  }
}

module.exports.help = {
  
}
