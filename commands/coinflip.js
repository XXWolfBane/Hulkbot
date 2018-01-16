module.exports.run = (bot, message, args, discord) => {
  const result = Math.round(Math.random());
  if (result) {
    let embed = new discord.RichEmbed()
    .setTitle(`${bot.user.displayName} Coinflip`)
    .setThumbnail(bot.user.avatarURL)
    .setDescription(`Welp! The coin landed on heads! You win.`)
    .setColor(`GREEN`)
    .setImage(`https://media3.giphy.com/media/mA51FMHGo3BDi/giphy.gif`)
    .setFooter(new Date())
    message.channel.send({embed})
  } else {
    let em = new discord.RichEmbed()
    .setTitle(`${bot.user.displayName} Coinflip`)
    .setDescription(`Welp! The coin landed on tails. You lose.`)
    .setColor(`RED`)
    .setImage(`https://media3.giphy.com/media/mA51FMHGo3BDi/giphy.gif`)
    .setFooter(new Date())
    message.channel.send({em})
  }
}

module.exports.help = {
  name: "coinflip",
  usage: ``,
  information: "Do a coinflip!"
}

module.exports.settings = {
  permission: "All",
  deleteresponder: true,
  category: "Fun"
}
