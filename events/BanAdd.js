const discord = require('discord.js')

module.exports = (bot, guild, member) => {
  let reason = require('../config.json').banreason
  if (reason) {
  console.log(`${member.username} was banned from ${guild.name} for ${reason}!`)
  member.send(`${member.username}, you are now banned from ${guild.name} for the reason ${reason}!`)
  } else {
    console.log(`${member.username}, you are now banned from ${guild.name}`)
    member.send(`${member.username}, you are now banned from ${guild.name}!`)
  }
  let log = guild.channels.find('name', 'guild-maintenance')
  let alt1 = guild.channels.find('name', 'mod-log')
  let alt2 = guild.channels.find('name', 'hulkbot-log')
  let alt3 = guild.channels.find('name', 'bot-hell')
  let embed = new discord.RichEmbed()
  .setTitle("Log")
  if (reason) {
  embed.setDescription(`${member.username} was banned from ${guild.name} for the reason ${reason}!`)
  } else {
    embed.setDescription(`${member.username} was banned from ${guild.name}!`)
  }
  embed.setThumbnail(member.avatarURL)
  embed.setColor("RED")
  embed.setFooter(`${member.username} was banned at ${new Date()}`)
  if (!log) {
    alt1.send({ embed })
  } else {
    if (!alt1) {
        log.send({ embed })
      if (!== log, alt1) {
        alt2.send({ embed })
      }
      if (!== log, alt1) {
        alt3.send({ embed })
      }
    }
  }
  
}
