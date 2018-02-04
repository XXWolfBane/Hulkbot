const { ShardingManager } = require('discord.js');
const manager = new ShardingManager(`./bot.js`, { totalShards: 5 });

manager.spawn();
manager.on('launch', shard => console.log(`Successfully launched shard ${shard.id}`));
