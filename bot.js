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
     console.log(message.author.username + " used the ping command.")
    } 
    if (message.content == prefix + "help") {
    message.channel.send({embed: {
  color: 3447003,
  description: "ping(owner only for now :wink:), help, perms"
   console.log(message.author.username + " used the help command.")
    }})
    if (message.content == prefix + "perms") {
     message.author.send("No permissions yet. Contact FreakingHulk Gaming#6545 for details.")
   console.log(message.author.username + " used the perms command.")
    }
    if (message.content == prefix + "invite") {
    message.reply("I can't use invite links. :frowning2: Here's an OAuth2 link instead! https://discordapp.com/oauth2/authorize?&client_id=294194506113220608&scope=bot&permissions=0")
    console.log(message.author.username + " used the invite command.") 
    }
   if (message.content == prefix + "joinserver") {
      message.reply(" Use this to join the help server: https://discord.gg/XvMA2rJ")
   }
})

bot.login(process.env.botToken);

