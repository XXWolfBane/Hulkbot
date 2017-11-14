module.exports.run = (bot, message, args) => {
 var game = args.slice(1)
 bot.user.setGame(game)
 message.channel.send(`:ok_hand: Okay, I will set my playing status to ${game}!`)
}

module.exports.help = {
  name: "changegame",
  usage: ``,
  information: ""
}
