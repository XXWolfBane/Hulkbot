module.exports.run = (bot, message, args, discord) => {
  if (message.channel.type == "dm") {
    message.channel.send("There is no guild to get the id from!")
  } else {
  message.channel.send(`Server ID: ${message.channel.guild.id}`)
  }
}

module.exports.help = {
  name: "serverid"
}
