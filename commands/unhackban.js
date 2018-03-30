module.exports.run = (bot, message, args, discord) => {
  let id = args.join(' ');
  let members = bot.fetchUsers()
  if (members.includes(id)) {
   message.guild.unban(id) 
  }
}

module.exports.help = {
  name: "unhackban"
}
