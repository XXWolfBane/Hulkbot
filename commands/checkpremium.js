const fs = require('fs')
const config = require('../config.json')
module.exports.run = (bot, message, args, discord) => {
    let ga = bot.guilds.get('356178662837452800')
    let member = message.author
    if (ga.members.find('id', member.id).roles.find('name','SuperPatron')) {
        let json = "true"
        config.premiumState = "true"
        fs.writeFile('../config.json', JSON.stringify(json), (err) => console.error(err))
        
        if (config.premiumState == "true") {
            let em = new discord.RichEmbed()
            .setTitle("Hulkbot Premium")
            .setDescription(`Yes! Your premium status is active!`)
            .setAuthor(bot.user.username)
            .setThumbnail(bot.user.avatarURL)
            message.channel.send({ em })
        }
    } else {
        let premiumState = "false"
        config.premiumState = "false";
        let json = "true"
    fs.writeFile('../config.json', JSON.stringify(json), (err) => console.error(err))
        let em = new discord.RichEmbed()
        .setTitle("Hulkbot Premium")
        .setDescription(`No. Your premium status is unactive. Buy premium [here!](https://www.patreon.com/bePatron?c=1365207 "buy premium")`)
        .setAuthor(bot.user.username)
        .setThumbnail(bot.user.avatarURL)
        .setColor("RANDOM")
        message.channel.send({ em })
    }
}

module.exports.help = {
    name: "checkpremium"
}
