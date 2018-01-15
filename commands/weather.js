const weather = require('weather-js')
let degreesym = "F";

module.exports.run = (bot, message, args) => {
  weather.find({
    search: `${args[0]}`,
    degreetype: `${degreesym}`
    },
    function (err, result) {
      message.channel.send({
      embed: {
          color: 3447003,
          author: {
              name: `${bot.user.username}`,
              icon_url: `${bot.user.avatarURL}`
          },
          title: `:cloud: **Weather for ${location}`,
      },
      })
   })
}

module.exports.help = {
  name: "weather"
}
