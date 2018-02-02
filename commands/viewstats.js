const dbl = require('discord-bot-list')

module.exports.run = (bot, message, args, discord) => {
  const c = new dbl({
    token: process.env.t,
    id: bot.id
  })
  
  setInterval(() => {
    c.postStats(bot.guilds.array().length, (err) => {
      if (err) console.error(new RangeError([`Failed to Post Stats to https://discordbots.org. Error Message: ${err}`]))
    })
  })
  let v = c.getVotes()
  let s = c.getBot()
  let votes = v
  let stats = s
  
  let em = new discord.RichEmbed()
  .setTitle(`Discord Bot List Stats`)
  .setDescription(`Discord Bot List Hulkbot Stats:`)
  .addField(`Bot Upvotes: ${votes}`)
  .addField(`Bot Name: ${stats}`)
  .addField(`Bot Status: ${bot.status}`)
  .setThumbnail(bot.user.avatarURL)
  .setAuthor(bot.user.username)
  .setImage('https://i.imgur.com/aId29cQ.png')
}

module.exports.help = {
    name: "dblstats"
}
