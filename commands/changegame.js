module.exports.run = (bot, message, args) => {
 if (!args) return message.channel.send(`:ok_hand: Okay, I will set my playing status back to normal!`)
 var game = args.join(' ')
 bot.user.setGame(game)
 message.channel.send(`:ok_hand: Okay, I will set my playing status to ${game}!`)
}

module.exports.help = {
  name: "changegame",
  usage: ``,
  information: ""
}
