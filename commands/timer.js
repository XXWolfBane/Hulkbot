module.exports.run = (bot, message, args) => {
  let channel = message.channel
  
  message.channel.send("Counting down from 10!")
  
  channel.send("10")
  channel.send("9")
  channel.send("8")
  channel.send("7")
  channel.send("6")
  channel.send("5")
  channel.send("4")
  channel.send("3")
  channel.send("2")
  channel.send("1")
  channel.send("BEEEEEEEP! Time is up!")
}

module.exports.help = {
  name: "timer",
  usage: ``,
  info: ""
}
