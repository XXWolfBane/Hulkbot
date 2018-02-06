module.exports.run = (bot, message, args) => {
  message.channel.send(`Your ID is: ${message.author.id}`)
}

module.exports.help = {
  name: "myid"
}
