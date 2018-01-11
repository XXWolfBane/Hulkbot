/** jshint -W038z8 */

// Discord init 
const discord = require('discord.js')
const config = require('./config.json')
const profanities = require("./profanities.json")
const bot = new discord.Client()
const prefix = process.env.prefix
const {baselogger} = require('./logger.js')
const result = Math.round(Math.random())
const updates = ["CODES!"];
var filteron = "true";
// End of init

// Gather commands
bot.commands = new discord.Collection();

require('fs').readdir("./commands/", (err, files) => {
  console.log("Loading commands...");
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});

bot.on("ready", () => {
  console.log("Bot is started. Get ready for some sweet commands!");
  console.log("Bot name: " + bot.user.username);
  console.log("Bot owner: " + config.owner);
  console.log("Bot Dev 1: " + config.owner);
  console.log("Bot Dev 2: " + config.dev2);
  console.log("Bot Dev 3: " + config.dev3);
  console.log(`~ ${bot.guilds.array().length} Guilds ${bot.channels.array().length} Channels ${bot.users.array().length} Users\n`);
  console.log(`Hulkbot Version ${config.version} Loaded!`);
  console.log(`Number of shards: ${bot.shardCount}`);
  console.log(`Bot ID: ${bot.user.id}`);
  bot.user.setGame(`Loading Hulkbot...`); 
  console.log(`Updates: ${updates}`);
  console.log(`Bot Create Date: ${bot.user.createdTimestamp}`)
  if (roff == "false") {
 let status = ["https://bot.hulkbot.ml/home", "You wouldn't like me when I'm angry.", `${bot.guilds.array().length} servers`];
  // Status Rotator
  gameval = 0;
  setInterval(() => {
    if (gameval == status.length) {
      gameval = 0;
    }
    var game = status[gameval];
    bot.user.setGame(`h!help | ${game}`);
    gameval++;
  }, 45000); // 45 sec
}
  
  bot.guilds.forEach((guild, id) => {
    console.log(`[SERVER] [${guild.memberCount}] ${guild.name} (${guild.id}) | Joined: ${guild.joinedAt.toString()}`);
    
    // send to all servers v v v 
     //guild.channels.find('name', 'general').send(`Happy new year from the owner!`)
    //guild.channels.find('name', 'chat').send(`Happy new year from the owner!`)
  });
});
 
bot.on("message", message => {
  if (filteron == "true") {
    for (x = 0; x < profanities.length; x++) {
      if (message.cleanContent.toLowerCase().includes(profanities[x].toLowerCase())) {
        console.log(`[Profanity] ${message.author.username}, said ${profanities[x]} in the ${message.channel.name} channel!`);
        message.channel.send(`<@${message.author.id}>, LANGUAGE!`).then(m => m.delete(10000));
        message.delete(500);
        return;
      }
    }
  }
  if (!message.content.startsWith(prefix)) return;

  let mArray = message.content.split(" ");
  let args = mArray.slice(1);

  let cmd = bot.commands.get(mArray[0].slice(prefix.length));
  if (message.author.bot) return;

  if (cmd) {
    if (!message.channel.type == "dm") {
    cmd.run(bot, message, args);
    console.log(message.author.username + " used the " + message.content.split(" ")[0] + " command.");
    baselogger(bot, `**Command Run**\n\n**Command:** ${message.content.split(" ")[0]}\n**User:** ${message.author.tag}\n**Message:** ${message.content}\n**Guild:** ${message.guild.name}\n**Channel:** ${message.channel.name}`);
  } else { 
      if (cmd) {
       cmd.run(bot, message, args);
       console.log(`${message.author.username} used the ${message.content.split(" ")[0]} command.`)
       baselogger(bot, `**Command Run**\n\n**Command:** ${message.content.split(" ")[0]}\n**User** ${message.author.tag}\n**Message:**${message.content}\n **(This command was used in a DM)**`)
    }
  }
  } 
});

bot.on("message", (message) => {
  
  if (message.content == prefix) {
    let channel = message.channel;
    
    channel.send("Sorry, that's not a command. :stuck_out_tongue:").then(m => m.delete(1000));
  }
  if (message.content == prefix + "filteroff") {
    // Prevents Unauthorized Users from accessing filters
    if (message.member.hasPermission("MANAGE_GUILD")) {
      filteron = "false";
      message.channel.send("Okay, I turned my filters off!");
      console.log(message.author.username + " set the filters to = " + filteron);
    } else {
      return message.channel.send("Sorry, you don't have the required permissions!");
    }
  }
  if (message.content == prefix + "filteron") {
    // Prevents Unauthorized Users from accessing filters
    if (message.member.hasPermission("MANAGE_GUILD")) {
      filteron = "true";
      message.channel.send("Okay, I turned my filters back on!");
      console.log(message.author.username + " set the filters to " + filteron);
    } else {
      return message.channel.send("Sorry, but you don't have the required permissions.");
    }
    if (message.content == prefix + "coinflip") {
      if (result) {
    message.channel.send("**Coin Flip:**\nThe coin landed on heads.");
      }
      else {
        message.channel.send("**Coin Flip:***\nThe coin landed on tails.");
}}}
  if (message.content.toLowerCase().includes("i love you hulkbot")) {
    message.channel.send("ERMAHGERD");
  }
  if (message.content.startsWith("<@294194506113220608>")) {
      let embed = new discord.RichEmbed()
      .setTitle("Hulkbot for Beginners")
      .setDescription("YUP! It's me, Hulkbot! To see more info on me, use the info command. (h!info)")
      .setColor("PURPLE")
      .setThumbnail(bot.user.avatarURL)
   message.channel.send({ embed })
  }
  if (message.author.id == process.env.oid) {
    if (message.content == prefix + "roff") {
        roff = "true";
        message.channel.send("Okay, I'll turn my Status Rotator off.")
    }
}
    if (message.author.id == process.env.oid) {
        if (message.content == prefix + "ron") {
            roff = "false";
            message.channel.send("Okay, I'll turn my Status Rotator on.")
        }
    }
 });
      
bot.on("guildCreate", (guild) => {
  baselogger(bot, `**Guild Join**\n\n**Guild:** ${guild.name}\n**Owner:** ${guild.owner.user.tag}\n**Large:** ${guild.large}\n**Member Count:** ${guild.memberCount}\n\n**Total Guilds:** ${bot.guilds.array().length}`, guild.iconURL);
});

bot.on("guildDelete", (guild) => {
  baselogger(bot, `**Guild Leave**\n\n**Guild:** ${guild.name}\n**Owner:** ${guild.owner.user.tag}\n**Large:** ${guild.large}\n**Member Count:** ${guild.memberCount}\n\n**Total Guilds:** ${bot.guilds.array().length}`, guild.iconURL);
});

bot.login(process.env.botToken); 
