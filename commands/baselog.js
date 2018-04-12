const {baselogger} = require('../logger.js')

module.exports.run = (bot, message, args, discord) => {
  let txt = args.join(' ')
  let em = new discord.RichEmbed()
  .setTitle(`Logging Command`)
  .setDescription(`:scroll: Sending ${txt} to the baselogger... :scroll:`)
  .setThumbnail(bot.user.avatarURL)
  .setAuthor(bot.user.username)
  if (message.author.id == process.env.oid) {
        message.channel.send({embed: em})
        baselogger(bot, txt, bot.avatarURL) 
  } else {
    message.channel.send("Nope!")
  }
}

module.exports.help = {
  name: "baselog"
}
