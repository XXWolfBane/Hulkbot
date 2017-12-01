const config = require('../config.json')

module.exports.run = (bot, message, args) => {
  if (message.author.hasPermission("KICK_MEMBERS") {
    if (message.content == prefix + "kick") {
    let member = message.mentions.members.first();
    
    member.kick().catch(message.channel.send("I can't kick without permissions, noob!"))
    }
  } else {
    message.channel.send("You don't have permission to kick people. If there's someone who needs to be kicked, contact an administrator or a moderator.")
  }
}
