const config = require('../config.json')
const oid = process.env.oid

module.exports.run = (bot, message, args, discord) => {
 
 if (message.author.id == oid) {
 if (!args) return message.channel.send(`:ok_hand: Okay, I will set my activity back to normal!`)
 var game = args.join(' ')
 bot.user.setActivity(`${game}`, {type: "PLAYING"})
 message.channel.send(`:ok_hand: Okay, I will set my activity to ${game}!`)
} else {
  message.channel.send("Nope!")
} 
}

module.exports.help = {
  name: "changegame",
  usage: ``,
  information: ""
}
