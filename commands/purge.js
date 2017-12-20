module.exports.run = (bot, message, args) => {
	if (message.author.hasPermission("MANAGE_MESSAGES")) {
  if (isNaN(args[0])) {
    return message.channel.send('Please define a number..')
  }

  var am = args[0]
  if (am < 3) {
    return message.channel.send('The minimum is amount you can delete is 3.')
  }
  if (am > 190) {
    message.channel.send("The maximum is amount you can delete is 90.")
    return;
  }
  message.channel.send(":exclamation: Beginning to purge " + am + " messages... :exclamation:").then(m => m.delete(2500))

  setTimeout(function() {
	message.channel.fetchMessages({limit: am}).then(m => message.channel.bulkDelete(m))
	message.channel.send("Done! Purged " + am + " messages.")
  }, 1000);
} else {
	message.channel.send("Sorry, you don't have the required permissions. :neutral:")
}

}

module.exports.help = {
  name: "purge",
  usage: `[amount]`,
  information: "Remove x amount of messages"
}
