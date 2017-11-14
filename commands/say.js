module.exports.run = (bot, message, args) => {
 message.channel.send(args.join(' '))
}

module.exports.help = {
  name: "say",
  usage: ``,
  information: ""
}
