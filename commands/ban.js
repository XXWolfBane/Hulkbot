const fs = require('fs')
const config = require('../config.json')

module.exports.run = (bot, message, args, discord) => {
if (message.member.hasPermission("BAN_MEMBERS")) {
    let reason = args.slice(1).join(" ");
    let member = message.mentions.members.first();
    member.ban(reason).catch(console.error)
    let embed = new discord.RichEmbed()
    .setTitle("Hulkbot Banning System")
    .setDescription(`:wave: Successfully Banned ${member.displayName} :point_right:`)
    .setColor("RED")
    .setThumbnail(bot.user.avatarURL)
    config.banreason = reason;
    fs.writeFile('../config.json', JSON.stringify(reason), (err) => console.error)
    message.channel.send({embed})
  } else {
    message.channel.send(`ADMIN ONLY, CHUMP!`)
  }
}

module.exports.help = {
  name: "ban"
}
