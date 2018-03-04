module.exports = (bot, message, discord) => {
  if (!message.channel.name == "bot-cmds") {
    message.delete("No bot commands here, go to #bot-cmds. Thanks! :D").then(m => m.delete(2000)
  }
}
