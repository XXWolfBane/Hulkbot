const Discord = require('discord.js');
const pckgjson = require(./package.json)
const main = pckgjson.main
const Manager = new Discord.ShardingManager(main);
Manager.spawn(2); // This example will spawn 2 shards (5,000 guilds);
