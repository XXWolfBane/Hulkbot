module.exports.run = (bot, message, args) => {
  require('request')(`https://discordbots.org/api/bots/${bot.id}/stats`, function(err, response, body) {
    if (!err && response.statusCode == 200) {
        message.channel.send(`DiscordBots.org Stats for Hulkbot: Server Count is: ${JSON.parse(body.server_count)}`)
    } else if (err) {
        console.error(err)
        message.channel.send(`Rip I can't find anything...`)
    }
  })
}

module.exports.help = {
    name: "viewstats"
}
