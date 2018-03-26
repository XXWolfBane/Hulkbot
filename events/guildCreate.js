const fs = require('fs')

module.exports = (bot, guild, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle("Introduction to Hulkbot")
  .setAuthor(bot.user.username)
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
  
  bot.users.get(guild.ownerID).send({embed})
}
