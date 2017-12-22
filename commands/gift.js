const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let channel = message.channel
  const embed = new discord.RichEmbed()
    .setTitle("Here's a gif from the bot owner! Merry Christmas!")
    .setDescription("https://media.giphy.com/media/gNke2UrUTopOg/giphy.gif")
  
  message.author.send({embed})
}

module.exports.help = {
  name: "gift"
}
