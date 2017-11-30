const config = require('../config.json')
const prefix = process.env.prefix

module.exports.run = (bot, message, args) => {
  if (message.channel.id == config.logid) {
    if (message.content == prefix + "clearlogs") {
      message.channel.bulkDelete(150).catch(console.err)
      message.channel.send("Successfully cleared the logs.").then(m => m.delete(5000))
    }
    else {
      console.log("Failed to clear logs. :-(")
    }
  }
}

module.exports.help = {
  name: "clearlogs",
  usage: "h!clearlogs",
  information: "Clears the bot logs"
}
