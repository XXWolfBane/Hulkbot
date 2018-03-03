const fs = require('fs')

const date = [new Date().getHours() +":"+ new Date().getMinutes()],
options = {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
}
const da = date.toLocaleString('en-us', options)

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
  .setFooter(`This message was sent today at ${da}`)
  
  bot.users.get(guild.ownerID).send({embed})
 
  fs.writeFile('../database.json', json, (err) => {
    if (err) {
      console.error(err)
    } else 
      console.log('Added to database.')
  })
}
