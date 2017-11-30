const config = require('../config.json')
const oid = process.env.oid

module.exports.run = (bot, message, args) => {
 
 if (message.author.id == oid) {
 if (!args) return message.channel.send(`:ok_hand: Okay, I will set my playing status back to normal!`)
 var game = args.join(' ')
 bot.user.setGame(game)
 message.channel.send(`:ok_hand: Okay, I will set my playing status to ${game}!`)
} else {
  message.channel.send("Nope!")
} 
}

module.exports.help = {
  name: "changegame",
  usage: ``,
  information: ""
}
