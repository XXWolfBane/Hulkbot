module.exports.run = (bot, message, args) => {
  let channel = message.channel
  var counting = "true"
  var num = 10
  message.channel.send("Counting down from 10!")
  if (counting == "true") {
  setInterval(() => {
    if (num == 1) {
      channel.send("BEEEEEP! Time is up.").then(counting = "false")
    } else {
      channel.send(num)
      num = num - 1
    }
  }, 1)
  }
}

module.exports.help = {
  name: "timer",
  usage: ``,
  info: ""
}
