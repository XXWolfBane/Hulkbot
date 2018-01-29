module.exports.run = (bot, message, args) => {
 message.delete(1000)
 message.channel.send(args.join(' '))
}

module.exports.help = {
  name: "say",
  usage: ``,
  information: ""
}
