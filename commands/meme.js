module.exports.run = (bot, message, args, discord) => {
  const m = require('automeme')
  m.getMeme('text', 1, (err, meme) => {
    if (err) {
      message.channel.send("I couldn't get a meme...")
      return console.error(err)
    }
    let em = new discord.RichEmbed()
    .setTitle("Hulkbot Meme Generator")
    .setDescription("Here's a random meme!")
    .setImage(meme)
    .setFooter(new Date().toString())
    message.channel.send(em)
  })
}

module.exports.help = {
  name: "meme"
}
