const config = require('../config.json')
const prefix = require(config.prefix)
profan = require('../profanities.json')

var dmfilters = "true"

module.exports.run = (bot, message, args) => {
if (message.channel.type == "dm") {
  if (message.author.id == config.oid) {
    if (message.content == prefix + "dmfiltersoff") {
      var dmfilters = "false"}
  }
  if (message.content == prefix + "dmfilterson") {
    var dmfilters = "true"
  }
  if (dmfilters = "true") {
  if (message.content == profan.length) {
    message.delete()
    message.channel.send(message.author.username + " LANGUAGE!")
  }
  else {
    message.channel.send("Something went wrong... BORK!")
  }
 }
   else {
    message.channel.send("Nope!")
  }
}}


module.exports.help = {
  name: "dmfilteroff",
  usage: ``,
  information: ""
}
