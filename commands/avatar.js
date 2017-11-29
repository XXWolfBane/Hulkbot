module.exports.run = (bot, message, args) => {
    message.channel.send(`Avatar:\n${message.author.avatarURL}`)
}

module.exports.help = {
  name: "avatar",
  usage: ``,
  information: ""
}
