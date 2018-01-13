module.exports = (bot, guild, member) => {
  let invite = bot.invite
  member.send(`${member.displayName}, you have now been unbanned from ${guild.name}! Here's an invite! ${bot.guilds.get().channel.random.generate(`sGGKD`)`)
}
