const prefix = "j!"

module.exports.run = (bot, message, args) => {
  if (message.content == prefix + "ping") {
  message.channel.send("PONG! :ping_pong: My ping is " + bot.ping + "ms!")
 }
}

module.exports.help = {
  name: "ping",
  usage: ``,
  information: ""
}
