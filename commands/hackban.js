module.exports.run = (bot, message, args, discord) => {
  let id = args.join(' ');
  if (!id == typeof("number")) {
    message.channel.send('I need a number, not anything else.')
  }
  bot.fetchUser(id).then(member => {
    member.ban()
  }).catch(() => {
    message.channel.send(`There's no user with the ID of ${id}, please try again. :face_palm:`)
  })
}

module.exports.help = {
  name: "hackban"
}
