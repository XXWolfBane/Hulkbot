module.exports.run = (bot, message, args) => {
  message.channel.send("I can't use invite links. :frowning2: Here's an OAuth2 link instead! https://discordapp.com/oauth2/authorize?&client_id=294194506113220608&scope=bot&permissions=0")
}

module.exports.help = {
  name: "invite",
}
