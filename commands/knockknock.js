const k = require('knock-knock-jokes')

module.exports.run = (bot, message, args, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle(`Hulkbot KnockKnock Jokes`)
  .setDescription(`${k()}`)
  .setColor("RANDOM")
  .setFooter(new Date())
  message.channel.send({ embed })
}

module.exports.help = {
  name: "knockknock"
}
