const dbl = require('discord-bot-list')

module.exports.run = (bot, message, args, discord) => {
  const c = new dbl({
    token: process.env.t,
    id: bot.id
  })
  
  setInterval(() => {
    c.postStats(bot.guilds.array().length, (err) => {
      if (err) console.error(new RangeError([`Failed to Post Stats to https://discordbots.org. Error Message: ${err}`]))
    }, 100)
  })
}

module.exports.help = {
    name: "dblstats"
}
