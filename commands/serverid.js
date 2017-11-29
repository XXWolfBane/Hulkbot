module.exports.run = (bot, message, args) => {
  message.channel.send("The server id is " + message.channel.guild.id)
}

module.exports.help = {
  name: "serverid"
}
