const config = require('../config.json')
const prefix = config.prefix
module.exports.run = (bot, message, args, discord) => {
 let member = message.mentions.members.first();
 let channel = message.channel
 let embed = new discord.RichEmbed()
 let reason = args[2]
 .setTitle(`${bot.user.username} Kick System`)
 .setDescription(`${member.displayName} was successfully kicked.`)
 
  if (message.member.hasPermission("KICK_MEMBERS")) {
    member.kick(reason).then(channel.send({ embed }))
  } else {
    message.channel.send("You don't have permission to kick people. If there's someone who needs to be kicked, contact an administrator or a moderator.")
  } 
}

module.exports.help = {
  name: "kick",
  usage: "h!kick @user",
  information: "Kicks a mentioned user."
}
