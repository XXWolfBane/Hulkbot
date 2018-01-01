const oid = process.env.oid
const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  if (message.author.id == oid) {
  bot.user.setStatus(`dnd`)
  let embed = new discord.RichEmbed()
    .setTitle("Status Changer")
    .setThumbnail(bot.user.avatarURL)
    .setDescription("Successfully set the bot status to Do Not Disturb!")
    .setFooter(`This command was used at ${new Date()}`)
    .setColor("RED")
    
  message.channel.send({ embed })
  } else {
    message.channel.send("Nope!")
  }
}

module.exports.help = {
  name: "dnd"
}
 
