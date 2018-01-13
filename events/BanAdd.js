const discord = require('discord.js')

module.exports = (bot, guild, member) => {
  console.log(`${member.username} was banned from ${guild.name} for ${reason}!`)
  let reason = require('../config.json').banreason
  member.send(`${member.displayName}, you are now banned from ${guild.name} for the reason ${reason}!`)
  let log = guild.channels.find('name', 'logs')
  let embed = new discord.RichEmbed()
  .setTitle("Log")
  .setDescription(`${member.username} was banned from ${guild.name} for the reason ${reason}!`)
  .setThumbnail(member.avatarURL)
  .setColor("RED")
  .setFooter(`${member.displayName} was banned at ${new Date}`)
  log.send({ embed })
}
