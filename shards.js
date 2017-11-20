const Discord = require('discord.js');
const main = require(./package.json.main)
const Manager = new Discord.ShardingManager();
Manager.spawn(2); // This example will spawn 2 shards (5,000 guilds);
