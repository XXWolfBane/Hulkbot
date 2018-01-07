const oid = process.env.oid
const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  if (message.author.id == oid) {
  bot.user.setStatus(`invisible`)
    let embed = new discord.RichEmbed()
    .setTitle("Status Changer")
    .setDescription("Successfully set the bot status to Invisible!")
    .setColor("GREY")
    .setFooter(`This command was used at ${new Date}`)
    message.channel.send({ embed })
} else {
  message.channel.send("Nope!")
}
}

module.exports.help = {
  name: "invbot",
  usage: ``,
  info: ``
}
