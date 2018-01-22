let oid = process.env.oid

module.exports.run = (bot, message, args, discord) => {
    var mes = args.join(' ')
    let embed = new discord.RichEmbed()
    .setTitle(`Contact System`)
    .setDescription(mes)
    .setColor(`BLUE`)
    .setFooter(`This message was sent by ${message.author.tag}`)
    .setThumbnail(bot.user.avatarURL)
    bot.users.get(oid).send({ embed })
}

module.exports.help = {
    name: "contact"
}
