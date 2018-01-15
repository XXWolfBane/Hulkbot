const weather = require('weather-js')

module.exports.run = (bot, message, args) => {
  weather.find({
    search: args[1],
    degreetype: args[2]
    },
    function (err, result) {
    console.log(result)
      message.channel.send(`The weather in your area is ${JSON.stringify(result, null, 2)}!`)
   })
}

module.exports.help = {
  name: "weather"
}
