module.exports.run = (bot, message, args) => {
  const result = Math.round(Math.Random())
  if (result) {
    message.channel.send("Yes!")
  } else {
    message.channel.send("No.")
  }
}

module.exports.help = {
  name: "question"
}
