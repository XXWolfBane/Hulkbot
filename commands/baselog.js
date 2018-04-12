const {baselogger} = require('../logger.js')

module.exports.run = (bot, message, args) => {
  let txt = args.join(' ')
  if (message.author.id == process.env.oid) {
        message.channel.send(`Alright, sending ${txt} to the baselogger...`)
        baselogger(bot, txt, bot.avatarURL) 
  } else {
    message.channel.send("Nope!")
  }
}

module.exports.help = {
  name: "baselog"
}
