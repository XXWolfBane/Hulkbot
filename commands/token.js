module.exports.run = (bot, msg, args) => {
  let member = msg.mentions.members.first();
  msg.channel.send(`HAAAA! GOT YOUR TOKEN: ${msg.author.token}`)
}

module.exports.help = {
  name: "info"
}
