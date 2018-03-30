module.exports.run = (bot, message, args, discord) => {
  let id = args.join(' ');
  let member = bot.fetchUser(id)
  if (member) {
    message.guild.unban(member)
    message.channel.send(`Alright, I just unhackbanned ${member.name}, with the id ${member.id}.`)
  } else {
    message.channel.send(id + " is not a valid Discord UserID.")
  }
}

module.exports.help = {
  name: "unhackban"
}
