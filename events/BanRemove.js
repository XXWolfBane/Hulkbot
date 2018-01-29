module.exports = (bot, guild, member) => {
  member.send(`${member.username}, you have now been unbanned from ${guild.name}!`)
  
  const log1="log",
  log2="hulkbot-logs",
  log3="audit",
  log4="bot-audit",
  log5="guild-maintenance"
  
  if (guild.channels.exists(log1)) {
  guild.channels.find('name', log1).then(l => {
    l.send(`${member.displayName} has been unbanned from ${guild.name}`)
  })} else {
  guild.channels.find('name', log2).then(l => {
    l.send(`${member.displayName} has been unbanned from ${guild.name}`)
  })} else {
  guild.channels.find('name', log3).then(l => {
    l.send(`${member.displayName} has been unbanned from ${guild.name}`)
  })} else {
  guild.channels.find('name', log4).then(l => {
    l.send(`${member.displayName} has been unbanned from ${guild.name}`)
  })} else {
  guild.channels.find('name', log5).then(l => {
    l.send(`${member.displayName} has been unbanned from ${guild.name}`)
  })}
}
