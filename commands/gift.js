const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let channel = message.channel
  const embed = {
  "title": "Christmas",
  "description": "Here's a fun little gif from the bot owner!",
  "url": "",
  "color": 1000,
  "timestamp": new Date(),
  "footer": {
    "icon_url": "",
    "text": "Merry Christmas!"
  },
  "thumbnail": {
    "url": ""
  },
  "image": {
    "url": "https://media.giphy.com/media/xT1R9Pu8MD8OPhWzxm/200w_d.gif"
  },
  "author": {
    "name": "Hulkbot",
    "url": "https://bot.hulkbot.ml/home",
    "icon_url": "https://cdn.discordapp.com/attachments/356178662837452801/392851847037321216/Hulk.png"
  }
};
}
 message.author.send({embed})
}

module.exports.help = {
  name: "gift"
}
