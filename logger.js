const config = require("./config.json");
const discord = require('discord.js');
let logchannel = "356181785899565077";

async function baselogger(bot, desc) {
  let messages = await bot.channels.get(logchannel).fetchMessages({limit: 5});
  let log = messages.filter(m => m.author.id === bot.user.id &&
    m.embeds[0] &&
    m.embeds[0].type === 'rich' &&
    m.embeds[0].footer &&
    m.embeds[0].footer.text.startsWith('Case')
  ).first();
  var thisCase = 0
  var foot = ``
  if (log) {
    thisCase = /Case\s(\d+)/.exec(log.embeds[0].footer.text);
    foot = `Case ${parseInt(thisCase[1]) + 1}`
  } else {
    foot = `Case 1`
  }
  let embed = new discord.RichEmbed()
    .setTimestamp()
    .setAuthor(`Hulk Logs ✍`, bot.user.avatarURL)
    .setColor("7289DA")
    .setDescription(desc)
    .setFooter(foot);
  
  bot.channels.get(logchannel).send({embed});
};

module.exports = {baselogger};
