// Discord init
const discord = require('discord.js')
const config = require('./config.json')
const profanities = require("./profanities.json")
const bot = new discord.Client()
const prefix = process.env.prefix
const {baselogger} = require('./logger.js');
var filteron = "true"
const result = Math.round(Math.random());
// End of init

// Gather commands
bot.commands = new discord.Collection();

require('fs').readdir("./commands/", (err, files) => {
  console.log("Loading commands...")
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  })
})

bot.on("ready", () => {
  console.log("Bot is started. Get ready for some sweet commands!")
  console.log("Bot name: " + bot.user.username)
  console.log("Bot owner: " + config.owner)
  console.log("Bot Dev 1: " + config.owner)
  console.log("Bot Dev 2: " + config.dev2)
  console.log("Bot Dev 3: " + config.dev3)
  console.log(`~ ${bot.guilds.array().length} Guilds ${bot.channels.array().length} Channels ${bot.users.array().length} Users\n`)
  console.log(`Hulkbot Version ${config.version} Loaded!`)
  console.log(`Number of shards: ${bot.shardCount}`)
  console.log(`Bot ID: ${bot.user.id}`)
  bot.user.setGame(`h!helping on ${bot.guilds.array().length} servers.`)
  bot.guilds.channels.find('name', 'general').send("@everyone, net neutrality has not been repealed yet! :despirateplease: The FCC Voted today to kill Net Neutrality, but it still has to go through congress!. If Net Neutrality is killed, it will be legal for your Internet service providers to slow down your internet speed by a considerable amount!\n\n R.I.P Net Neutrality 2015-2017")
  })
  //Let's just leave this out for now.
  //var general = bot.channels.find('name', 'general')
  //general.send("Hey everyone. Hulk here. Just letting you know, if the bot shuts down, it's just for updates. See ya.")

 

  
  bot.guilds.forEach(async (guild, id) => {
    console.log(`[SERVER] [${guild.memberCount}] ${guild.name} (${guild.id}) | Joined: ${guild.joinedAt.toString()}`)
    
    // send to all servers v v v 
    //guild.channels.find('name', 'general').send("Hey everyone. Hulk here. Just letting you know, if the bot shuts down, it's just for updates. See ya.")
  })
});
 
bot.on("message", message => {
  if (filteron == "true") {
    for (x = 0; x < profanities.length; x++) {
      if (message.cleanContent.toLowerCase().includes(profanities[x].toLowerCase())) {
        console.log(`[Profanity] ${message.author.username}, said ${profanities[x]} in the ${message.channel.name} channel!`)
        message.channel.send(`<@${message.author.id}>, LANGUAGE!`).then(m => m.delete(10000))
        message.delete(500)
        return;
      };
    }
  };
  if (message.channel.type === "dm") {
    if (message.cleanContent.toLowerCase() == "cleardm") {
      message.channel.fetchMessages({
        limit: 100
      }).then(m => {
        m.forEach(async (msg) => {
          if (msg.author.id == bot.user.id) {
            msg.delete()
          };
        });
      });
    };
  };
  if (!message.content.startsWith(prefix)) return;

  let mArray = message.content.split(" ");
  let args = mArray.slice(1);

  let cmd = bot.commands.get(mArray[0].slice(prefix.length));
  if (message.author.bot) return;

  if (cmd) {
    cmd.run(bot, message, args);
    console.log(message.author.username + " used the " + message.content.split(" ")[0] + " command.");
    baselogger(bot, `**Command Run**\n\n**Command:** ${message.content.split(" ")[0]}\n**User:** ${message.author.tag}\n**Message:** ${message.content}\n**Guild:** ${message.guild.name}\n**Channel:** ${message.channel.name}`)
  }
})

bot.on("message", (message) => {
  if (message.content.startsWith(prefix + "ban")) {
    if (message.member.hasPermission("BAN_MEMBERS"))
      // Easy way to get member object though mentions.
      var member = message.mentions.members.first();
    // Kick
    member.ban().then((member) => {
      // Successmessage
      message.channel.send(":wave: " + member.displayName + " has been successfully banned! :point_right: ");
    }).catch(() => {
      // Failmessage
      message.channel.send("I can't ban without permissions, noob!");
    });
  }
  if (message.content == prefix + "filteroff") {
    // Prevents Unauthorized Users from accessing filters
    if (message.member.hasPermission("MANAGE_GUILD")) {
      filteron = "false"
      message.channel.send("Okay, I turned my filters off!");
      console.log(message.author.username + " turned the filters to = " + filteron);
    } else {
      return message.channel.send("Sorry, you don't have the required permissions!");
    }
  }
  if (message.content == prefix + "filteron") {
    // Prevents Unauthorized Users from accessing filters
    if (message.member.hasPermission("MANAGE_GUILD")) {
      filteron = "true"
      message.channel.send("Okay, I turned my filters back on!");
      console.log(message.author.username + " turned the filters to = " + filteron);
    } else {
      return message.channel.send("Sorry, but you don't have the required permissions.");
    }
    if (message.content == prefix + "coinflip") {
      if (result) {
    message.channel.send("**Coin Flip:**\nThe coin landed on heads.")
      }
      else {
        message.channel.send("**Coin Flip:***\nThe coin landed on tails.")
}}}
  if (message.content.toLowerCase().includes("i love you hulk")) {
    message.channel.send("wait what")
  }
});

bot.on("guildCreate", (guild) => {
  baselogger(bot, `**Guild Join**\n\n**Guild:** ${guild.name}\n**Owner:** ${guild.owner.user.tag}\n**Large:** ${guild.large}\n**Member Count:** ${guild.memberCount}\n\n**Total Guilds:** ${bot.guilds.array().length}`, guild.iconURL)
});

bot.on("guildDelete", (guild) => {
  baselogger(bot, `**Guild Leave**\n\n**Guild:** ${guild.name}\n**Owner:** ${guild.owner.user.tag}\n**Large:** ${guild.large}\n**Member Count:** ${guild.memberCount}\n\n**Total Guilds:** ${bot.guilds.array().length}`, guild.iconURL)
});


bot.login(process.env.botToken)

var ups = 1

