module.exports.run = (bot, message, args, discord) => {
  let num = Math.floor(Math.random()*1000)
  let num2 = Math.floor(Math.random()*num)
  let member = message.mentions.members.first();
  
  let embed = new discord.RichEmbed()
  .setTitle("Hulkbot Roasting")
  .setDescription(`${member.displayName} has a ${num2}% chance of failing in life.`)
  .setFooter(`${member.displayName} got roasted by ${message.author.displayName}!`)
  .setThumbnail(`https://i.imgur.com/6Bzv6Wv.png`)
  .setAuthor(`Hulkbot`)
  
  message.channel.send({embed})
}

module.exports.help = {
  name: "roast"
}
