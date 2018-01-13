const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
let reason = args.join(' ')
if (message.member.hasPermission("BAN_MEMBERS")) {
    let member = message.mentions.members.first();
    member.ban().catch(console.error)
    let embed = new discord.RichEmbed()
    .setTitle("Hulkbot Banning System")
    .setDescription(`:wave: Successfully Banned ${member.displayName} :point_right:`)
    .setColor("RED")
    .setThumbnail(bot.user.avatarURL)
    
    message.channel.send({embed})
  } else {
    message.channel.send(`ADMIN ONLY, CHUMP!`)
  }
}

module.exports.help = {
  name: "ban"
}
