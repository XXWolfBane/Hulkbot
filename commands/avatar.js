module.exports.run = (bot, message, args, suffix) => {
    //message.channel.send(`Avatar:\n${message.author.avatarURL}`)
    let usr;
    if (suffix == "") {
      usr = msg.member;
    } else {
      usr = bot.memberSearch(suffix, message.channel.guild);
    }
    if (usr){
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
              name: `${bot.user.username}`,
              icon_url: `${bot.user.avatarURL}`
          },
          title: `${member.user.username}'s Avatar!`,
          image: {
            url: avatar_url,
          },
      },
      })
    } else {
      message.channel.send(':x: Please provide a user fr me to search for!')
    }
}

module.exports.help = {
  name: "avatar",
  usage: ``,
  information: ""
}
