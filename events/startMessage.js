const discord = require('discord.js')
const client = new discord.Client
const v = require('../config.json').version

client.on('ready', () => {
var channel = client.channels.get('387342809390120970');
  channel.send("Hulkbot v" + v + " loaded!");
});

client.login(process.env.token)
