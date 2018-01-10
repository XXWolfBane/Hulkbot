let oid = process.env.oid

module.exports.run = (bot, message, args) => {
    var message = args.join(' ')
    var guild = bot.guilds.find('name', 'Hulkbot Base (and more)')
    let owner = guild.members.find('id', oid)
    owner.send(message)
}

module.exports.help = {
    name: "contact"
}
