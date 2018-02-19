module.exports.run = () => {
  const m = require('automeme')
  m.getMeme((err, meme) => {
    if (err) return console.error(err)
    let em = new discord.RichEmbed()
    .setTitle("Hulkbot Meme Generator")
    .setDescription("Here's a random meme!")
    .setImage(meme)
    .setFooter(new Date().toString())
    message.channel.send({ em })
  })
}

module.exports.help = {
  name: "meme"
}
