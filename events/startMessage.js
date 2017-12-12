const discord = require('discord.js')
const client = new discord.Client

client.on('ready', () => {
var channel = client.channels.get('my-unique-channel-id');
  channel.sendMessage("Hello world");
});

client.login(process.env.token)
