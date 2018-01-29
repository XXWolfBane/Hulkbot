module.exports.run = (bot, message, args, discord) => {
  if (message.author.id == message.member.guild.ownerID) {
    message.channel.send(`Fine, I'll leave... :sob:`)
    message.member.guild.leave()
  } else {
    message.channel.send(`Missing Permissions!`)
    const err = new RangeError([(`Error: User has Missing Permissions...`)])
    console.log(err)
  }
}

module.exports.help = {
  name: "leave"
}
