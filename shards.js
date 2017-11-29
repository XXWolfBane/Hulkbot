const Discord = require("discord.js");


const shard = new Discord.ShardingManager("./bot.js", {
	totalShards: "auto",
	token: process.env.botToken,
	respawn: true
});

shard.on("launch", (s) => {
  console.log("Launching shard " + (s.id + 1) + "/" + shard.totalShards);
});

shard.spawn();
