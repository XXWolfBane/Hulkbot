module.exports.run = (bot, message, args, discord) => {
  let mid = args.join(' ');
  if (!typeof mid == "string") {
    message.channel.send('I need a number, not anything else.')
  } else {
    bot.fetchUser(mid).then((member, id) => {
      message.guild.ban(id)
    }).catch(() => {
      message.channel.send(`There's no user with the ID of ${mid}, please try again. :face_palm:`)
    })
  }
}

module.exports.help = {
  name: "hackban"
}
