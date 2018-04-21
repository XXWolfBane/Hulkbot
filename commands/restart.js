module.exports.run = (bot, message, args, discord) => {
let em = new discord.RichEmbed()
.setTitle("Hulkbot Restarting...")
.setDescription(":wave: Restarting...")
.setThumbnail(bot.user.avatarURL)
.setTimestamp()
.setColor("GOLD")

  function restart(channel) {
    channel.send({embed: em})
    .then(() => bot.destroy())
    .then(() => bot.login(process.env.token))
  }
  
  restart(message.channel)
}

module.exports.help = {
  name: "restart"
}
