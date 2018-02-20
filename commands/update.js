module.exports.run = (bot, message, args, discord) => {
  var snekfetch = require('snekfetch')
  snekfetch.post('https://discordbots.org/api/bots/stats')
  .set('Authorization', process.env.tok)
  .send({ server_count: bot.guilds.size })
  .then(() => {
    console.log("Updated DBL Stats.")
    message.channel.send("Updated DBL Stats.")
  }).catch(err => console.error(err))
}

module.exports.help = {
  name: "update"
}
