module.exports = (bot, config) => {
  console.log("Bot is started. Get ready for some sweet commands!");
  console.log("Bot name: " + bot.user.username + `\n`);
  console.log("Bot owner: " + config.owner + `\n`);
  console.log(`Bot Developers: ${config.owner}, ${config.dev2}, and ${config.dev3}\n`);
  console.log(`~ ${bot.guilds.array().length} Servers, ${bot.channels.array().length} Channels, and ${bot.users.array().length} Users\n`);
}
