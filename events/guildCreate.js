const fs = require('fs')

const db = require('../database.json')

module.exports = (bot, guild, discord) => {
  db.guildname = guild.name
   db.membercount = guild.membercount
  
  let json = {
    "guildname": guild.name,
    "membercount": guild.membercount
  }
  
  let embed = new discord.RichEmbed()
  .setTitle("Introduction to Hulkbot")
  .setAuthor(bot.user.username)
  .setThumbnail(bot.user.avatarURL)
  .setFooter(`This message was sent today at ${new Date().getHours()}:${new Date().getMinutes()}`)
  
  bot.users.get(guild.ownerID).send({embed})
 
  fs.writeFile('../database.json', json, (err) => console.error(err))
}
