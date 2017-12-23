const BMA = require('../config.json').BMA
const BCO = require('../config.json').BCO
const OID = process.env.oid

const mainroles = [BMA, BCO, OID]

module.exports.run = (bot, message, args) => {
  if (message.author.id == BCO) {
  message.author.send(`Your permissions are Co-Owner level! You have full permissions.`)
  }
  if (message.author.id == BMA) {
    message.author.send(`Your permissions are Main Admin level! You have full permissions.`)
  }
  if (message.author.id == process.env.oid) {
    message.author.send(`You are the owner! Hello my Creator!`)
  }
  if (!message.author.id == mainroles) {
    message.author.send(`You have the everyone permissions.`)
  }
}

module.exports.help = {
  name: "perms"
}
