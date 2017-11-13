const discord = require('discord.js')
const bot = new discord.Client()
const prefix = "h!"

bot.on("ready", () => {
 console.log("Bot is started. Get ready for some sweet commands!") 
 bot.user.setGame("h!help")
});

bot.on("message", message => {
    if (message.content == prefix + "ping") {
      message.reply("pong!")
    } 
});

bot.on("message", message => {
  if (message.content == prefix + "help") {
    message.reply("Only a pong command for now, but there'll be more soon! :wink:")
  }
});

bot.login(process.env.botToken);

