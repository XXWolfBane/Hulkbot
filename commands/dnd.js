const oid = process.env.oid

module.exports.run = (bot, message, args) => {
  if (message.author.id == oid) {
  bot.user.setStatus(`dnd`)
  } else {
    message.channel.send("Nope!")
  }
}

module.exports.help = {
  name: "dnd"
}
 
