let prefix = "h!"
var cleverbot = require('cleverbot.io'),
cb = new cleverbot("sMNApmkOjMlZRlPZ", "gskxw3JBqEVGIAboBjOnvyTf8awM1MbS")

module.exports = (bot, message) => {
  if (message.content.startsWith(prefix)) return;
  cb.setNick("Hulkbot")
  if (!message.content.toLowerCase().includes("who is your creator")) {
    if (message.author.bot) return;
      cb.create(function (err, session) {
        cb.ask(message.content, function (err, response) {
        message.channel.send(response)
        console.log(`${message.author.username}(${message.author.id}) said ${message.content}, and Hulkbot responded with ${response}!`)
        if (err) {
          console.error
        }
      })
    })
  } else {
    message.channel.send(`My creators are <@${process.env.oid}> and <@140487710727995392>.`)
  }
}
