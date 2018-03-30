module.exports.run = (bot, message, args, discord) => {
  let id = args.join(' ');
  let member = bot.fetchUser(id)
  message.guild.ban(member.id)
  message.channel.send(`Alright, I just banned ${member.name} with the id ${member.id}.`)
}

module.exports.help = {
  name: "hackban"
}
