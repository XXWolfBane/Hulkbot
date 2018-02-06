const fs = require('fs')
const config = require('../config.json')
module.exports.run = (bot, message, args, discord) => {
    let ga = bot.guilds.get('356178662837452800')
    let member = message.author
    let json = JSON.stringify(`"premium": "true"`)
    if (ga.members.find('id', member.id).hasRole('SuperPatron')) {
        fs.writeFile(config, json)
        if (config.premium == "true") {
            let em = new discord.RichEmbed()
            .setTitle("Hulkbot Premium")
            .setDescription(`Yes! Your premium status is active!`)
            .setAuthor(bot.user.username)
            .setThumbnail(bot.user.avatarURL)
            message.channel.send({ em })
        }
    } else {
    let json = (`"premium": "true"`)
    fs.writeFile(config, json)
        let em = new discord.RichEmbed()
        .setTitle("Hulkbot Premium")
        .setDescription(`No. Your premium status is unactive. Buy premium [here!](https://www.patreon.com/bePatron?c=1365207 "buy premium")`)
        .setAuthor(bot.user.username)
        .setThumbnail(bot.user.avatarURL)
        message.channel.send({ em })
    }
}
