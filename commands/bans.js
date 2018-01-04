module.exports.run = (bot, message, args) => {
  let bans = message.channel.guild.fetchBans()
  message.channel.send(`Bans in this guild: ${bans}`)
}

module.exports.help = {
  name: "bans"
}
