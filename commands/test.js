module.exports.run = (bot, message, args, discord) => {
      let embed = new discord.RichEmbed()
      .setTitle(`Testing`)
      .setThumbnail(bot.user.avatarURL)
      .setDescription(`Test Successfull!`)
      .setImage(`http://blvcccvrd.com/images/black-checkmark-21.gif`)
      .setAuthor(bot.user.username)
      .setColor(`RANDOM`)
      message.channel.send("Testing...").then(msg => {
        setTimeout(() => {
          msg.edit({ embed })
        }, 5000)
      })
    }

module.exports.help = {
  name: "test",
  usage: "h!test",
  information: "null"
}
