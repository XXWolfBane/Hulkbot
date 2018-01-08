module.exports.run = (bot, message, args) => {
  let channel = message.channel
  
  channel.send("Hulk's latest stream is https://www.youtube.com/watch?v=UUCvh-tAMFY. I'll fetch weekly updates for ya.")
}

module.exports.help = {
  name: "stream",
  usage: ``,
  info: ""
}
 
