module.exports.run = (bot, message, args, discord) => {
if (message.author.id == process.env.oid) {
  if (args.join(' ').startsWith('https://')) {
    bot.user.setAvatar(args.join(' '));
    message.channel.send(`Set my avatar to ${args.join(' ')}!`);
  } else {
    message.channel.send("The avatar file has to be from a URL...").then(m => {
      message.delete(100);
      m.delete(1000);
    })
  }
  } else {
    message.channel.send("Nope!")
  }
}

module.exports.help = {
  name: "setavatar"
}
