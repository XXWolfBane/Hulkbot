var cleverbot = require('cleverbot.io'),
cb = new cleverbot("sMNApmkOjMlZRlPZ", "gskxw3JBqEVGIAboBjOnvyTf8awM1MbS")

module.exports = (bot, message) => {
  if (message.author.bot) return;
  cb.setNick("Hulkbot")
  cb.create(function (err, session) {
    cb.ask(message.content, function (err, response) {
      message.channel.send(response)
      console.log(`${message.author.username} asked ${message.content}, and Hulkbot responded with ${response}!`)
      if (err) {
        console.error
      }
    })
  })
}
