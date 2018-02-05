module.exports.run = (bot, message, args, discord) => {
  message.channel.send(`My creators are <@${process.env.oid}> and <@140487710727995392>.`)
}

module.exports.help = {
  name: "creators"
}
