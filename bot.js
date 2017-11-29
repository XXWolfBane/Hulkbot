const discord = require('discord.js')
const config = require('./config.json')
const profanities = require("./profanities.json")
const bot = new discord.Client()
const prefix = process.env.prefix
const owner = "FreakingHulk Gaming#6545"
const dev2 = "RHG#0822"
const version = "1.2.0"
var filteron = "true"

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
  console.log("Bot name: " + bot.user.username + "bot")
  console.log("Bot owner: " + owner)
  console.log("Bot Dev 1: " + owner)
  console.log("Bot Dev 2: " + dev2)
   console.log(`~ ${bot.guilds.array().length} Guilds ${bot.channels.array().length} Channels ${bot.users.array().length} Users\n`)
  console.log(`Hulkbot Version ${version} Loaded!`)
  bot.user.setGame("h!help | Hulkbot Version " + version + " Loaded!")

  bot.guilds.forEach(async (guild, id) => {
    console.log(`[SERVER] [#${guild.memberCount}] ${guild.name}, ${guild.id} | Joined: ${guild.joinedAt.toString()}`)
  });
  let status = ["Taking over the world", "Pizza is better", "Serving my owner", "You wouldn't like me when I'm angry."]
  // Status Rotator
  gameval = 0
  setInterval(() => { 
    if (gameval == status.length) { 
      gameval = 0
    } 
    var game = status[gameval]
    bot.user.setGame(`h!help | bot.hulkbot.ml | ${bot.guilds.array().length} servers | ${game}`)
    gameval++
  }, 25000) // One min
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
      message.channel.fetchMessages({limit: 100}).then(m => {
        m.forEach(async (msg) => {
          if (msg.author.id == bot.user.id) {
            msg.delete()
          };
        });
      });
    };
  };
  if (!message.content.startsWith(prefix)) return;
  if (message.content == prefix + "perms") {
    message.author.send("No permissions yet. Contact <@242734840829575169> for details.")
    console.log(message.author.username + " used the perms command.")
  }
  if (message.content == prefix + "invite") {
    message.channel.send("I can't use invite links. :frowning2: Here's an OAuth2 link instead! https://discordapp.com/oauth2/authorize?&client_id=294194506113220608&scope=bot&permissions=0")
    console.log(message.author.username + " used the invite command.")
  }
  if (message.content == prefix + "joinserver") {
    message.channel.send("Use this to join the help server: https://discord.gg/XvMA2rJ")
  }
  if (message.content == prefix + "shutdown") {
    if (message.author.id == config.ownerid) {message.channel.send(":wave: Hulkbot will now shutdown.")
    setTimeout(function() {
      process.exit(666);
    }, 10010)} else {message.channel.send("Nope!")}
    console.log("Someone used the shutdown command.")
}
  let mArray = message.content.split(" ");
  let args = mArray.slice(1);

  let cmd = bot.commands.get(mArray[0].slice(prefix.length));
  if (message.author.bot) return;

  if (cmd) {
    cmd.run(bot, message, args);
    console.log(message.author.username + " used the " + message.content.split(" ")[0] + " command.");
  }
})

bot.on("message", (message) => {
  if (message.content.startsWith(prefix + "kick")) {
    // Easy way to get member object though mentions.
    var member = message.mentions.members.first();
    // Kick
    member.kick().then((member) => {
      // Successmessage
      message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
    }).catch(() => {
      // Failmessage
      message.channel.send("I can't kick without permissions, noob!");
    });
  }
  if (message.content.startsWith(prefix + "ban")) {
    if (message.member.hasPermission("BAN_MEMBERS")
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
  if (message.content.startsWith(prefix + "giverole")) {
    let member = message.mentions.members.first();
    let role = message.mentions.roles.first();
    member.addRole(role).then(console.log(member.displayName + " was given " + role).catch(message.reply("I can't assign roles without permissions. Please move the Hulkbot role above all other roles. Thanks! :grin:")))
    message.channel.send("User was given role.")
  }
  if (message.content.startsWith(prefix + "bork")) {
    let member = message.mentions.members.first();
    message.channel.send(`<@${member.id}> was borked by <@${message.author.id}>`)
    console.log(message.author.username + " used the bork command!");
  }
    if (message.content == prefix + "filteroff") {
    // Prevents Unauthorized Users from accessing filters
    if(message.member.hasPermission("MANAGE_GUILD")) {
      filteron = "false"
      message.channel.send("Okay, I turned my filters off!");
      console.log(message.author.username + " turned the filters to = " + filteron);
    } else {
      return message.channel.send("Sorry, you don't have the required permissions!");
    }
  }
  if (message.content == prefix + "filteron") {
    // Prevents Unauthorized Users from accessing filters
    if(message.member.hasPermission("MANAGE_GUILD")) {
      filteron = "true"
      message.channel.send("Okay, I turned my filters back on!");
      console.log(message.author.username + " turned the filters to = " + filteron);
     } else {
      return message.channel.send(message.author.username + ", sorry, but you don't have the required permissions.");
    }
  }
  if (message.content == prefix + "myid") {
    message.reply("your id is: " + message.author.id)
  }
  if (message.content == prefix + "serverid") {
    message.channel.send("The server id is " + message.channel.guild.id)
  }
  if (message.content == prefix + "myavi") {
    message.channel.send("This is your avatar:" + user.avatar)
  }
});

bot.login(process.env.botToken);
