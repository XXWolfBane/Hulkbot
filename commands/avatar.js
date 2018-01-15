module.exports.run = (bot, message, args, discord) => {
    //message.channel.send(`Avatar:\n${message.author.avatarURL}`)
    let usr = message.mentions.users.first() ? message.mentions.users.first() : message.author;
    if (usr){
      message.channel.send({
        embed: {
          color: 3447003,
          author: {
              name: `${bot.user.username}`,
              icon_url: `${bot.user.avatarURL}`
          },
          title: `${usr.username}'s Avatar!`,
          image: {
            url: usr.avatarURL,
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
