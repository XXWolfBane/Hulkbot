const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./YOUR_BOT_FILE_NAME.js');
Manager.spawn(5); // This example will spawn 5 shards (25,000 guilds);
