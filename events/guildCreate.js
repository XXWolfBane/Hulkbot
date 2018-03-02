const fs = require('fs')

const db = require('../database.json')

module.exports = (bot, guild, discord) => {
  db.guildname = guild.name
  
  fs.writeFile('../database.json', JSON.stringify(guild.name), (err) => console.error(err))
  
  const membercount = guild.memberCount
  
  fs.writeFile('../database.json', JSON.stringify(membercount), (err) => console.error(err))
}
