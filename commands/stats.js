module.exports.run = (bot, message, args, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle('Hulkbot Status')
  .setColor(`RANDOM`)
  .setDescription(`Bot Status: ${bot.user.status}
  Bot Servercount: ${bot.guilds.array().length}
  Bot Usercount: ${bot.users.array().length}
  Bot Channelcount: ${bot.channels.array().length}
  Memory Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
  Discord.js Version 11.3.0
  Node Version 8.9.4
  Source Code: [GitHub](https://github.com/FHGDev/JSHulkbot)
  Hulkbot Website: [Website](https://bot.hulkbot.ml/home)`)
  .setFooter(new Date())
  
  message.channel.send({ embed })
}

module.exports.help = {
  name: "stats"
}
