module.exports.run = (bot, message, args) => {
 if (message.guild.id == '318532861638737931') {
  if (!message.member.hasPermission("ADMINISTRATOR")) return;
 }
 message.delete(1000)
 message.channel.send(args.join(' '))
}

module.exports.help = {
  name: "say",
  usage: ``,
  information: ""
}
