const fs = require('fs')

module.exports = (bot, guild, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle("Introduction to Hulkbot")
  .setDescription("Heyo! Thanks for adding me to your server. Before you start using me, I need to get some things straight. First of all, for some basic info about me, say `h!info`.")
  .addField("To see a list of my commands, say `h!help`.")
  .addField("If you need to report a bug, go to the [issue tracker](https://github.com/FHGDev/JSHulkbot/issues/new). Or just use the `h!contact` command, and it will send a message straight to my creator.")
  .addField("Alrighty! Now you can start using all my awesome features in your server, "+guild.name+"!")
  .setAuthor(bot.user.username)
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
  
  bot.users.get(guild.ownerID).send({embed})
}
