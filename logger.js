const config = require("./config.json");
const discord = require('discord.js');
const logchannel = "356181785899565077"

module.exports = (bot, custom) => {
  const messages = await bot.channels.get(logchannel).fetchMessages({limit: 5});
  const log = messages.filter(m => m.author.id === bot.user.id &&
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
  const reason = reaso || `No reason given.`
  if (!custom) custom = ""
  let embed = new discord.RichEmbed()
    .setTimestamp()
    .setAuthor(`${bot.user.username} Logs ✍`, bot.user.avatarURL)
    .setColor("7289DA")
    .setDescription(`${custom}`)
    .setFooter(foot);
  bot.channels.get(logchannel).send({embed});
};
