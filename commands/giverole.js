module.exports.run = (bot, message, args) => {
  return // soon
  var member = message.mentions.members.first();
  var role = message.mentions.roles.first();
  member.addRole(role).then(console.log(member.displayName + " was given " + role).catch(message.reply("I can't assign roles without permissions. Please move the Hulkbot role above all other roles. Thanks! :grin:")))
}

module.exports.help = {
  name: "giverole",
}
