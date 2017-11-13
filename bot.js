const discord = require('discord.js')
const bot = new discord.Client()
const prefix = "h!"
const owner = "FreakingHulk Gaming#6545"

// Gather commands
bot.commands = new Discord.Collection();

require('fs').readdir("./commands/", (err, files) => {
	console.log("Loading commands...")
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  })
})

bot.on("ready", () => {
 console.log("Bot is started. Get ready for some sweet commands!") 
 bot.user.setGame("h!help | PIZZA IS BETTER")
 console.log("Bot name: " + bot.user.username + "bot")
 console.log("Bot owner: " + owner)
});

bot.on("message", message => {
    if (message.content == prefix + "ping") {
      message.channel.send("PONG! :ping_pong: My ping is " + bot.ping + "ms!")
     console.log(message.author.username + " used the ping command.")
    } 
    if (message.content == prefix + "help") {
       message.reply("commands are: ```ping, help, perms, kick```")
   console.log(message.author.username + " used the help command.")
    }
    if (message.content == prefix + "perms") {
     message.author.send("No permissions yet. Contact FreakingHulk Gaming#6545 for details.")
   console.log(message.author.username + " used the perms command.")
    }
    if (message.content == prefix + "invite") {
    message.channel.send("I can't use invite links. :frowning2: Here's an OAuth2 link instead! https://discordapp.com/oauth2/authorize?&client_id=294194506113220608&scope=bot&permissions=0")
    console.log(message.author.username + " used the invite command.") 
    }
   if (message.content == prefix + "joinserver") {
      message.reply("use this to join the help server: https://discord.gg/XvMA2rJ")
   }
 
  let mArray = message.content.split(" ");
  let args = mArray.slice(1);

  let cmd = commands.get(mArray[0].slice(prefix.length));
    if(message.author.bot) return;
    if(message.channel.type === "dm") return
    
  if(cmd) {
    cmd.run(bot, message, args);
   }
})

bot.on("message", (message) => {
    if (message.content.startsWith(prefix + "kick")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
    }
});

bot.login(process.env.botToken);

