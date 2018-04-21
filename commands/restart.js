module.exports.run = (bot, message, args, discord) => {
let em = new discord.RichEmbed()
.setTitle("Himiachi Restarting...")
.setDescription(":wave: Restarting...")
.setThumbnail(bot.user.avatarURL)
.setImage("https://media1.giphy.com/media/WKJpCXfvBHyla/giphy.gif")
.setTimestamp()
.setColor("GOLD")

  function restart(channel) {
    channel.send({embed: em})
    .then(() => bot.destroy())
    .then(() => bot.login(process.env.botToken))
  }
  
  restart(message.channel)
}

module.exports.help = {
  name: "restart"
}
