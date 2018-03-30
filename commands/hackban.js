module.exports.run = (bot, message, args, discord) => {
  let id = args.join(' ');
  let member = bot.fetchUser(id)
  if (bot.fetchUser(id)) {
  message.guild.ban(member.id)
  message.channel.send(`Alright, I just banned ${id}.`)
} else {
    message.channel.send("There's no user on Discord with that ID... :C")
  }
}

module.exports.help = {
  name: "hackban"
}
