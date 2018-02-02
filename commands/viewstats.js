const dbl = require('discord-bot-list')

module.exports.run = (bot, message, args, discord) => {
  const c = new dbl({
    token: process.env.t,
    id: bot.id
  })
  
  let arg = args.slice(0)
  if (message.content == "h!dblsearch user") {
    if (arg[0].length !== 18) return;
      if (!arg[0] == NaN) {
        c.getUser(arg[0], (error, res) => {
          let em = new discord.RichEmbed()
          .setTitle(`Discord Bot List User Search`)
          .setDescription(`This is what I got: ${res}`)
          .setAuthor(`Hulkbot`)
          .setColor("RANDOM")
          .setThumbnail(bot.user.avatarURL)
          .setImage(`https://i.imgur.com/aId29cQ.png`)
      })
    } 
  } 
}

module.exports.help = {
    name: "dblsearch"
}
