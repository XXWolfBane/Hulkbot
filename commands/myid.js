module.exports.run = (bot, message, args) => {
  message.reply("your id is: " + message.author.id)
}

module.exports.help = {
  name: "myid"
}
