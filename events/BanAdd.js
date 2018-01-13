const discord = require('discord.js')

module.exports = (bot, guild, member) => {
  let reason = require('../config.json').banreason
  member.send(`${member.displayName}, you are now banned from ${guild.name} for the reason of ${reason}!`)
  let log = guild.channels.find('name', 'logs')
  let embed = new discord.RichEmbed()
  .setTitle("Log")
  .setDescription(`${member.displayName} was banned from ${guild.name} for the reason of ${reason}!`)
  .setFooter(`${member.displayName} was banned at ${new Date}`)
  log.send({ embed })
}
