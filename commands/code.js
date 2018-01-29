const code = require("../codes.json").code

module.exports.run = (bot, message, args, discord) => {
  if (message.content == "h!redeem " + code) {
    let em = new discord.RichEmbed()
    .setTitle(`${bot.user.displayName} Code Redemption`)
    .setDescription(`Correct Code! Use this invite to go to the Hulkbot Base discord where you'll get the SuperPatron role, and more!`)
    .addField(`[Invite](https://discord.gg/qEFNkxB "Click to go to the Hulkbot Base!")`)
    .setAuthor(`${bot.user.avatarURL} ${bot.user.displayName}`)
    .setColor(`BLUE`)
    .setFooter(new Date())
    message.channel.send({ embed }).then(m => m.delete(5500))
  } else {
    message.channel.send("Sorry, incorrect code.")
  }
}

module.exports.help = {
  name: "redeem"
}
