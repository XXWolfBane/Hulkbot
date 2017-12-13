module.exports.run = (bot, message, args) => {
  message.channel.send(`${bot.guilds.array().length} is the number of servers I'm on.`)
}

module.exports.help = {
  name: "listservers",
  usage: ``,
  information: ""
} 
