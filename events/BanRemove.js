module.exports = (bot, guild, member) => {
  member.send(`${member.displayName}, you have now been unbanned from ${guild.name}!`)
  let wel = guild.channels.find('name', 'logs')
  wel.send(`${member.displayName} has been unbanned from ${guild.name}`)
}
