const code = require("../codes.json").code

module.exports.run = (bot, message, args) => {
  if (message.content == "h!redeem " + code) {
    message.channel.send("Code Redeemed! Join this discord to get the superpatron role. https://discord.gg/qEFNkxB").then(m => m.delete(5000))
  } else {
    message.channel.send("Sorry, incorrect code.")
  }
}

module.exports.help = {
  name: "redeem"
}
