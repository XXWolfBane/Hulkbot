const fml = require('fmylife')

module.exports.run = (bot, message, args, discord) => {
  let joke = fml.random()
  let embed = new discord.RichEmbed()
  .setTitle('Hulkbot FML')
  .setDescription(`${joke}`)
  .setColor("RANDOM")
  .setFooter(new Date().toDateString())
  message.channel.send({ embed })
}

module.exports.help = {
  name: "fml"
}
