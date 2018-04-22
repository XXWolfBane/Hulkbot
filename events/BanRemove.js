const discord = require('discord.js')

module.exports = (bot, guild, member) => {
  member.send(`${member.username}, you have now been unbanned from ${guild.name}!`)
  const lognames = ["guild-maintenance", "log", "bot-log", "hulkbot-log"]
  
  guild.channels.forEach(channel => {
    if (lognames.includes(channel.name)) {
      let embed = new discord.RichEmbed()
      .setTitle("Hulkbot Logger")
      .setDescription(`${member.username} was just unbanned from ${guild.name}`)
      .setTimestamp()
      .setColor("BLUE")
      .setThumbnail(member.avatarURL)
      .setFooter(`${member.username} unbanned`)
      channel.send({embed: embed})
    } else {
      return;    
    }
  })
}
