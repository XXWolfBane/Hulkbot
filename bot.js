const discord = require('discord.js')
const bot = new discord.Client()
const prefix = "h!"

bot.on("ready", () => {
 console.log("Bot is started. Get ready for some sweet commands!") 
 bot.user.setGame("h!help | Hulkbot Beta")
});

bot.on("message", message => {
    if (message.content == prefix + "ping") {
      message.reply("pong!")
     console.log("Someone used the ping command.")
    } 
});

bot.on("message", message => {
  if (message.content == prefix + "help") {
    message.reply("ping(owner only for now :wink:), help, perms")
   console.log("Someone used the help command.")
  }
});

bot.on("message", message => {
  if (message.content == prefix + "perms") {
     message.author.sendMessage("No permissions yet. Contact FreakingHulk Gaming#6545 for details.")
   console.log(message.author.username)
    }
});

bot.login(process.env.botToken);

