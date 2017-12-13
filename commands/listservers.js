module.exports.run = (bot, message, args) => {
  message.channel.send(`I am in ${bot.guilds.array().length} servers.`)
}

module.exports.help = {
  name: "listservers",
  usage: ``,
  information: ""
} 
