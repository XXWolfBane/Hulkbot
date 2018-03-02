const fs = require('fs')

const db = require('../database.json')

module.exports = (bot, guild, discord) => {
  db.guildname = guild.name
  
  let embed = new discord.RichEmbed()
  
  bot.users.get(guild.ownerID).send({embed})
  
  fs.writeFile('../database.json', JSON.stringify(guild.name), 'utf8', (err) => console.error(err))
  
  const membercount = guild.memberCount
  
  db.membercount = membercount
  
  fs.writeFile('../database.json', JSON.stringify(membercount), (err) => console.error(err))
}
