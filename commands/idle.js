const oid = process.env.oid

module.exports.run = (bot, message, args, discord) => {
  if (message.author.id == oid) {
  bot.user.setStatus(`idle`)
    let embed = new discord.RichEmbed()
    .setTitle("Status Changer")
    .setDescription("Successfully set the bot status to Idle!")
    .setThumbnail(bot.user.avatarURL)
    .setColor(255,255,0)
    .setFooter(`This command was at ${new Date()}`)
    message.channel.send({ embed })
  } else {
    message.channel.send("Nope!")
  }
}

module.exports.help = {
  name: "idlebot",
  usage: ``,
  info: ""
}
