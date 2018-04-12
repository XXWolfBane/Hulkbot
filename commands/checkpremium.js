const fs = require('fs')
const config = require('../config.json')

module.exports.run = (bot, message, args, discord) => {
    let ga = bot.guilds.get('356178662837452800')
    let member = message.author
    if (message.member == message.guild.owner) {
    if (ga.members.find('id', member.id).roles.find('name','SuperPatron')) {
        
            let em = new discord.RichEmbed()
            .setTitle("Hulkbot Premium")
            .setAuthor(":money_mouth:")
            .setDescription(`:moneybag: Your premium status is active! Thanks for donating! :moneybag:`)
            .setThumbnail(bot.user.avatarURL)
            .setColor("GREEN")
            message.channel.send(em)
    } else {
        let em = new discord.RichEmbed()
        .setTitle("Hulkbot Premium")
        .setAuthor(":money_mouth:")
        .setDescription(`:thumbsdown: Your premium status is unactive. Buy premium [here!](https://www.patreon.com/bePatron?c=1365207 "buy premium") :thumbsdown:`)
        .setThumbnail(bot.user.avatarURL)
        .setColor("RED")
        message.channel.send(em)
    }
  } else {
      let em = new discord.RichEmbed()
      .setTitle("Failure! :face_palm:")
      .setDescription("You need to be the owner of this guild to use this command.")
      .setAuthor(bot.user.username)
      .setThumbnail(bot.user.avatarURL)
      .setColor("RED")
      
    message.channel.send({embed: em})
  }
}

module.exports.help = {
    name: "checkpremium"
}
