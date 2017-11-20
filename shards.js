const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('/bot.js');
Manager.spawn(5); // This example will spawn 5 shards (25,000 guilds);
console.log("Sharding is ready.");
