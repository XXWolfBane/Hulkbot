const discord = require('discord.js');

module.exports.run = (bot, message, args) => {
  //message.channel.send("Use this to join the help server: https://discord.gg/XvMA2rJ")
  
  bot.guilds.get(`356178662837452800`).channels.find("name", "general").createInvite({
  "temporary": false,
   "maxAge: 0,
   "maxUses": 1,
   "unique": true
  },"Commands").then(invite =>{
    let embed = new discord.RichEmbed()
    .setTimestamp()
    .setAuthor(`Hulk Inviter ✍`, bot.user.avatarURL)
    .setThumbnail(bot.guilds.get(`356178662837452800`).iconURL)
    .setColor("ff3333")
    .setDescription(`Use this to join the help server: ${invite}`)
    .setURL(invite)
  
  bot.channels.get(logchannel).send({embed});
  });
}

module.exports.help = {
  name: "joinserver"
}
