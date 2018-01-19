const fml = require('random_fml')

module.exports.run = (bot, message, args, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle('Hulkbot FML')
  .setDescription(`${fml}`)
  .setColor("RANDOM")
  .setFooter(new Date())
  message.channel.send({ embed })
}

module.exports.help = {
  name: "fml"
}
