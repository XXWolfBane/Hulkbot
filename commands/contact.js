let oid = process.env.oid

module.exports.run = (bot, message, args) => {
    var mes = args.join(' ')
    var guild = bot.guilds.find('name', 'Hulkbot Base (and more)')
    let owner = guild.members.find('id', oid)
    owner.send(`${mes}\n\n(This message was sent by ${message.author.username}.`)
}

module.exports.help = {
    name: "contact"
}
