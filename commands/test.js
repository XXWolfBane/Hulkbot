const oid = process.env.oid
const prefix = require('../config.json').prefix

module.exports.run = (bot, message, args, discord) => {
      let embed = new discord.RichEmbed()
      .setTitle(`Testing`)
      .setThumbnail(bot.user.avatarURL)
      .setDescription(`Test Successfull!`)
      .setImage(`https://cdn.discordapp.com/attachments/358745922517336064/407813894078332928/giphy.gif`)
      .setAuthor(`${bot.user.avatarURL} ${bot.user.username}`)
      .setColor(`RANDOM`)
      message.channel.send("Testing...").then(msg => msg.edit({ embed }))
    }

module.exports.help = {
  name: "test",
  usage: "h!test",
  information: "null"
}
