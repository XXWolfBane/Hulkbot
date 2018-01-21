let oid = process.env.oid

module.exports.run = (bot, message, args, discord) => {
    var mes = args.join(' ')
    bot.users.get(oid).send(`${mes}\n\n(This message was sent by ${message.author.tag})`)
}

module.exports.help = {
    name: "contact"
}
