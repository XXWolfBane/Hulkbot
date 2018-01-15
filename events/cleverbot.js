let prefix = "h!"
var cleverbot = require('cleverbot.io'),
cb = new cleverbot("sMNApmkOjMlZRlPZ", "gskxw3JBqEVGIAboBjOnvyTf8awM1MbS")

module.exports = (bot, message) => {
  if (message.author.bot) return;
  let args = message.content.split(" ")
  let cmd = bot.commands.get(args.slice(0))
  cb.setNick("Hulkbot")
  cb.create(function (err, session) {
    if (!cmd) {
    cb.ask(message.content, function (err, response) {
      message.channel.send(response)
      console.log(`${message.author.username} said ${message.content}, and Hulkbot responded with ${response}!`)
      if (err) {
        console.error
      }
    })
    } else {
      return;
    }
  })
}
