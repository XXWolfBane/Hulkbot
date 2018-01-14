module.exports = (cb, bot, message) => {
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
