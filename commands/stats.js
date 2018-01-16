module.exports.run = (bot, message, args, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle('Hulkbot Status')
  .setColor(`RANDOM`)
  .setDescription(`Bot Status: ${bot.user.status}`)
  .addField(`Bot Servercount: ${bot.guilds.array().length}`)
  .addField(`Bot Usercount: ${bot.users.array().length}`)
  .addField(`Bot Channelcount: ${bot.channels.array().length}`)
  .addField(`Memory Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
  .addField(`Discord.js Version 11.3.0`)
  .addField(`Node Version 8.9.4`)
  .addField(`Source Code: [GitHub](https://github.com/FHGDev/JSHulkbot)`)
  .addField(`Hulkbot Website: [Website](https://bot.hulkbot.ml/home)`)
  .setFooter(new Date())
  
  message.channel.send({ embed })
}

module.exports.help = {
  name: "stats"
}
