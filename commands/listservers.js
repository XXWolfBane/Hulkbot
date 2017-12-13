module.exports.run = (bot, message, args) => {
  message.channel.send(`I am in ${bot.guilds.array().length} servers. I know ${bot.users.array().length} users, and ${bot.channels.array().length} channels.`)
}

module.exports.help = {
  name: "listservers",
  usage: ``,
  information: ""
} 
