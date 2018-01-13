module.exports = (bot, guild, member) => {
  member.send(`${member.username}, you have now been unbanned from ${guild.name}!`)
  let hbl = ["guild-maintenance"]
 
  if (guild.channels.find('name' hbl)) {
    let log = guild.channels.find('name' hbl)
    log.send(`${member.username} has been unbanned from ${guild.name}`)
  }
 let log = ["logs", "audit", "log", "server-maintenance"]
  if (guild.channels.find('name', log)) {
    let cnl = guild.channels.find('name', log)
  cnl.send(`${member.username} has been unbanned from ${guild.name}`)
  } else {
    return;
  }
}
