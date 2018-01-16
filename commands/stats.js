module.exports.run = (bot, message, args, discord) => {
  let embed = new discord.RichEmbed()
  
  
  message.channel.send({ embed })
}

module.exports.help = {
  name: "stats"
}
