module.exports.run = (bot, message, args, discord) => {
  let member = message.mentions.members.first();
  let reason = args.join(' ');
  if (member.displayName) {
    member.ban(reason)
    message.channel.send(`Alright, I banned ${member.displayName}!`).then(m => m.delete(1000))
  } else {
    member.ban(reason)
    message.channel.send(`Alright, I just banned ${member.username}!`).then(m => m.delete(1000))
  }
}

module.exports.help = {
  name: "softban"
}
