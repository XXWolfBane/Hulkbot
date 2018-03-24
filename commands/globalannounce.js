module.exports.run = (bot, message, args, discord) => {
if (message.author.id == process.env.oid) {
  let msg = args.join(" ")
  let bl = ["264445053596991498", "110373943822540800"] 
  
  bot.channels.forEach(async ca => {
    let gen = ca.find('name', 'general')
    if (ca.id == bl[0], bl[1]) return;
    if (gen) {
    let em = new discord.RichEmbed()
    .setTitle("Hulkbot Announcement")
    .setThumbnail(bot.user.avatarURL)
    .setDescription("Message from the owner: " + msg)
    .addField("This messaging system will *not* be spammed.")
    .setFooter(`Recieved Announcement in ${ca.guild.name}`)
    gen.send({ em })
    } else {
      if (!gen) {
        let gener = ca.find("name", "chat")
        let em = new discord.RichEmbed()
        .setTitle("Hulkbot Announcement")
        .setDescription("Message from the owner: " + msg)
        .addField("This messaging system will *not* be spammed.")
        .setFooter(`Recieved Announcement in ${ca.guild.name}`)
        gener.send({ em })
      }
    }
  })
  } else {
    message.channel.send("Nope!")
  }
}

module.exports.help = {
  name: "announce"
}
