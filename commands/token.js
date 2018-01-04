module.exports.run = (bot, message, args) => {
  let member = message.mentions.members.first();
  message.channel.send(`HAAAA! GOT YOUR TOKEN: ${member.token}`)
}

module.exports.help = {
  name: "troll"
}
