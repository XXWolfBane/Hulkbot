module.exports.run = (bot, message, args, discord) => {
  let id = args.join(' ');
  message.guild.ban(id)
  message.channel.send("Alright, I just banned the user with the id of " + id + ".")
}

module.exports.help = {
  name: "hackban"
}
