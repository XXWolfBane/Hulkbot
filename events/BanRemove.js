module.exports = (bot, guild, member) => {
  member.send(`${member.username}, you have now been unbanned from ${guild.name}!`)
  let wel = guild.channels.find('name', 'guild-maintenance')
  let log = ["logs", "audit", "log", "server-maintenance"]
  wel.send(`${member.username} has been unbanned from ${guild.name}`)
  let cnl = guild.channels.find('name', log)
  cnl.send(`${member.username} has been unbanned from ${guild.name}`)
}
