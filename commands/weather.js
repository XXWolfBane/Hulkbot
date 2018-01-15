const weather = require('weather-js')

module.exports.run = (bot, message, args) => {
  weather.find({
    search: "Pontotoc, Texas",
    degreetype: "F"
    },
    function (err, result) {
    console.log(JSON.stringify(result))
      message.channel.send(`The weather in your area is ${JSON.stringify(result)}!`)
   })
}

module.exports.help = {
  name: "weather"
}
