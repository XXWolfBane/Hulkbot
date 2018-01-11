const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  if message.member.hasPermission("BAN_MEMBERS") {
    let member = message.mentions.members.first();
    member.ban().catch(console.error)
    let em = new discord.RichEmbed()
    .setTitle("Hulkbot Banning System")
    .setDescription(`:wave: Successfully Banned ${member.displayName} :point_right:`)
    .setColor("RED")
    .setThumbnail(bot.user.avatarURL)
    message.channel.send({ em })
  } else {
    message.channel.send(`ADMIN ONLY, CHUMP!`)
  }
}
