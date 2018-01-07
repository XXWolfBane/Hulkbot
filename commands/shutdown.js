const config = require('../config.json')
const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  if (message.author.id == config.ownerid) {
    let embed = new discord.RichEmbed()
      .setTitle("Hulkbot Shutdown")
      .setDescription(":wave: Hulkbot will now shutdown... :cry:")
      .setThumbnail(bot.user.avatarURL)
      .setColor('BLUE')
    message.channel.send({ embed })
    setTimeout(function() {
      process.exit(666);
    }, 10010)
  } else {
    message.channel.send("Nope!")
  }
}

module.exports.help = {
  name: "shutdown",
  usage: ``,
  information: ""
}
