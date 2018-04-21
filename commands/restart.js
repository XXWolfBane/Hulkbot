module.exports.run = (bot, message, args, discord) => {
  function restart(channel) {
  let em = new discord.RichEmbed()
  .setTitle("Hulkbot Restarting...")
  .setDescription(":wave: Restarting...")
  .setColor("BLUE")
  .setTimestamp()
  .setThumbnail("https://media1.giphy.com/media/WKJpCXfvBHyla/giphy.gif")
  channel.send({embed: em})
    bot.destroy().then(() => {
      bot.login(process.env.token)
    })
  }
  if (message.author.id == process.env.oid) {
    restart(message.channel)
  } else {
    message.channel.send("Nope!")
  }
}
