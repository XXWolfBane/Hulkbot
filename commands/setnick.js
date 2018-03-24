module.exports.run = (bot, message, args, discord) => {
  let newname = args.join(' ')
  bot.user.setUsername(newname)
  
  message.channel.send(`Okay, I set my username to ${newname}!`).then(m => {
    message.delete(100)
    m.delete(100)
  })
}

module.exports.help = {
  name: "setnick"
}
