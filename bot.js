const discord = require('discord.js')
const bot = new discord.Client()
const prefix = "h!"

bot.on((message), message => {
    if (message.content == prefix + "ping") {
      message.reply("pong!")
    } 
});
