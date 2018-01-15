const weather = require('weather-js')

module.exports.run = (bot, message, args) => {
  weather.find({
    search: args[1],
    degreetype: args[2]
    },
    function (err, result) {
      message.channel.send(`The weather in your area is ${result}!`)
   })
}

module.exports.help = {
  name: "weather"
}
