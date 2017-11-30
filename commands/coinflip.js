module.exports.run = (bot, message, args) => {
  const result = Math.round(Math.random());
  if (result) {
    message.channel.send("**Coin Flip:**\n\nThe coin landed on heads.")
  } else {
    message.channel.send("**Coin Flip:**\n\nThe coin landed on tails.")
  }
}

module.exports.help = {
  name: "coinflip",
  usage: ``,
  information: "Do a coinflip!"
}

module.exports.settings = {
  permission: "All",
  deleteresponder: true,
  category: "Fun"
}
