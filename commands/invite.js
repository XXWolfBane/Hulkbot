const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let embed = new discord.RichEmbed()
  .setTitle("Hulkbot Invitation")
  .setDescription(`I can't use invite links.\nHere's an OAuth2 link instead! https://discordapp.com/api/oauth2/authorize?client_id=294194506113220608&permissions=8&redirect_uri=https%3A%2F%2Fbot.hulkbot.ml%2Fhome&response_type=code&scope=bot%20guilds`)
  .setColor("GREEN")
  .setFooter(`This command was used at ${new Date}`)
  message.channel.send({ embed })
}

module.exports.help = {
  name: "invite",
}
