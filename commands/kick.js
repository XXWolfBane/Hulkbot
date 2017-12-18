const config = require('../config.json')
const prefix = config.prefix

module.exports.run = (bot, message, args) => {
  if (message.member.hasPermission("KICK_MEMBERS")) {
    let member = message.mentions.members.first();
    
    member.kick().catch(message.channel.send("I can't kick without permissions, noob!"))
  } else {
    message.channel.send("You don't have permission to kick people. If there's someone who needs to be kicked, contact an administrator or a moderator.")
  } 
}

module.exports.help = {
  name: "kick",
  usage: "h!kick @user",
  information: "Kicks a mentioned user."
}
