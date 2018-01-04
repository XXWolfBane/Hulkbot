module.exports.run = (bot, message, args) => {
  let bans = message.channel.guild.bans()
  message.channel.send(`Bans in this guild: ${bans}`)
}

module.exports.help = {
  name: "getbans"
}
