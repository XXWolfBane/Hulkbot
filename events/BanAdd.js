const discord = require('discord.js')

module.exports = (bot, guild, member) => {
  let reason = require('../config.json').banreason
  console.log(`${member.username} was banned from ${guild.name} for ${reason}!`)
  member.send(`${member.username}, you are now banned from ${guild.name} for the reason ${reason}!`)
  let log = guild.channels.find('name', 'guild-maintenance')
  let logs = ["logs", "audit", "log", "server-maintenance"]
  let cnl = guild.channels.find('name', logs)
  guild.channel.startTyping()
  let embed = new discord.RichEmbed()
  .setTitle("Log")
  .setDescription(`${member.username} was banned from ${guild.name} for the reason ${reason}!`)
  .setThumbnail(member.avatarURL)
  .setColor("RED")
  .setFooter(`${member.username} was banned at ${new Date}`)
  log.send({ embed })
  guild.channel.stopTyping()
}
