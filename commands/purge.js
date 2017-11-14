module.exports.run = (bot, message, args) => {
  if (isNaN(args[0])) {
    return message.channel.send('Please define a number..')
  }

  var amm = args[0]
  if (amm < 3) {
    return message.channel.send('The minimum is ammount you can delete is 3.').then(m => m.delete(2500))
  }
  if (amm > 190) {
    message.channel.send("The maximum is ammount you can delete is 90.").then(m => m.delete(2500))
    return;
  }
  message.channel.send(":exclamation: Beginning to purge " + amm + " messages... :exclamation:").then(m => m.delete(2500))

  setTimeout(function() {
	message.channel.fetchMessages({limit: amm}).then(m => message.channel.bulkDelete(m))
	message.channel.send("Done! Purged " + amm + " messages.").then(m => m.delete(2500))
  }, 3000);


}

module.exports.help = {
  name: "purge",
  usage: `[ammount]`,
  information: "Remove x ammount of messages"
}
