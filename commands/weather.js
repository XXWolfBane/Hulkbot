const weather = require('weather-js')

module.exports.run = (bot, message, args) => {
  let location = args.slice(2).join("")
  console.log(location)
  
  weather.find({
    search: location,
    degreetype: "F"
    },
    function (err, result) {
      console.log(result)
      message.channel.send(`The weather in your area is ${result}!`)
   })
}

module.exports.help = {
  name: "weather"
}
