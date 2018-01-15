const weather = require('weather-js')
let degreesym = "F";

module.exports.run = (bot, message, args) => {
  weather.find({
    search: `${args[0]}`,
    degreetype: `${degreesym}`
    },
    function (err, result) {
    console.log(JSON.stringify(result))
      message.channel.send(`The weather in your area is ${JSON.stringify(result)}!`)
   })
}

module.exports.help = {
  name: "weather"
}
