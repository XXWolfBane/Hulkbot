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
    fields: [
      {
        name: "Prefix",
        value: "h!"
      },
      {
        name: "Owner Only",
        value: "shutdown and changegame."
      },
      {
        name: "Utility :tools:",
        value: "mute, unmute, kick, ban, auth, purge, perms, filteroff, and filteron."
      },
      {
        name: "Bot Status :robot:",
        value: "uptime and ping."
      },
      {
        name: "Adding the bot, and more help.",
        value: "joinserver, invite, info, and contact."
      },
             {
        name: "Fun",
        value: "coinflip, say, myid, avatar, serverid, bork, and yomomma."
      },
      {
        name: "More",
        value: "Additional commands at https://bot.hulkbot.ml/commands"
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
  name: "help"
}
