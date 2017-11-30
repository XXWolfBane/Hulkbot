module.exports.run = (bot, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Help",
    url: "https://discord.gg/XvMA2rJ",
    description: "You asked for help, here it is.",
    fields: [{
        name: "Utility :tools:",
        value: "Mute, Kick, Ban, Auth."
      },
      {
        name: "Bot Status :robot:",
        value: "uptime, ping, changegame."
      },
      {
        name: "Fun",
        value: "Coming soon"
      },
      {
        name: "More",
        value: "Additional commands at https://bot.hulkbot.ml"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: ""
    }
  }
});
}

module.exports.help = {
  name: "help",
  usage: ``, 
  information: ""
}
