const oid = process.env.oid
const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  if (message.author.id == oid) {
  bot.user.setStatus(`idle`)
    let embed = new discord.RichEmbed()
    .setTitle("Status Changer")
    .setDescription("Successfully set the bot status to Idle!")
    .setThumbnail(bot.user.avatarURL)
    .setColor("YELLOW")
    .setFooter(`This command was at ${new Date()}`)
  } else {
    message.channel.send("Nope!")
  }
}

module.exports.help = {
  name: "idlebot",
  usage: ``,
  info: ""
}
