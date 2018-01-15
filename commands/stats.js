module.exports.run = (bot, message, args) => {
  let embed = new discord.RichEmbed()
  
  
  message.channel.send({ embed })
}

module.exports.help = {
  name: "stats"
}
