const weather = require('weather-js');
const discord = require(`discord.js`);


module.exports.run = (bot, message, args) => {
  weather.find({
    search: `${args[0]}`,
    degreetype: "F"
    },
    function (err, result) {
    
      message.channel.send({
      embed: {
          color: 3447003,
          author: {
              name: `${bot.user.username}`,
              icon_url: `${bot.user.avatarURL}`
          },
          title: `:cloud: **Weather for ${location.name}`,
          description: `succ me jerry`
      },
      })
   })
}

module.exports.help = {
  name: "weather"
}
