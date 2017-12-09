module.exports.run = (bot, message, args) => {
  var msgArray = [];
  msgArray.push(`Hello, I'm ${bot.user.username}, a Discord bot.`);
  msgArray.push(`I'm currently running on Discord.js version 11.2.1, which utilizes the latest version of Discord.js, an *unofficial* Discord libary by hydrabolt.`);
  msgArray.push(`The developers of my source code are <@242734840829575169> and <@140487710727995392>.`);
  msgArray.push(`To see what I can do, use h!help`);
  msgArray.push(`My invocation method is using prefixes, currently, I only respond to messages beginning with h!`);
  message.channel.send(msgArray)
}

module.exports.help = {
  name: "info",
  usage: ``,
  information: "I'll tell you some information about myself."
}
