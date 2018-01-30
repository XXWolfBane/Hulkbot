const oid = process.env.oid
const prefix = require('../config.json').prefix

module.exports.run = (bot, message, args) => {
      message.channel.send("Testing...").then(msg => msg.edit('https://cdn.discordapp.com/attachments/358745922517336064/407813894078332928/giphy.gif'))
      
    }

module.exports.help = {
  name: "test",
  usage: "h!test",
  information: "null"
}
