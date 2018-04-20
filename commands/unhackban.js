module.exports.run = (bot, message, args, discord) => {
  let id = args.join(' ');
  let member = bot.fetchUser(id).then(user => {
    message.guild.unban(user.id).catch(err => {
      message.channel.send(`Failed to unban ${user.username}`)
    })
    message.channel.send(`Alright, I unbanned ${user.username}.`)
  }).catch(() => message.channel.send("Sorry, I can't find a user with that ID..."))
}
  

module.exports.help = {
  name: "unhackban"
}
