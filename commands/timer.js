module.exports.run = (bot, message, args) => {
  let channel = message.channel
  var num = 10
  message.channel.send("Counting down from 10!")
  setInterval(() => {
    num = num - 1
    channel.send(num)
  }, 1)
}

module.exports.help = {
  name: "timer",
  usage: ``,
  info: ""
}
