module.exports.run = (bot, message, args, discord) => {
  let newname = args.join(' ')
  bot.user.setUsername(newname)
  
  message.channel.send(`Okay, I set my username to ${newname}!`)
}

module.exports.help = {
  name: "setnick"
}
