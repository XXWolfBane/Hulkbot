module.exports.run = (bot, message, args) => {
  message.channel.send({
      embed: {
          color: 3447003,
          author: {
              name: `${bot.user.username}`,
              icon_url: `${bot.user.avatarURL}`
          },
          title: `:ping_pong: Pong!`,
          description: `Heyo! I'm watching over **${bot.users.array().length} users** in over **${bot.guilds.array().length} servers**!`,
      },
  }).then((m) =>{
      m.edit({
          embed: {
              color: 3447003,
              author: {
                  name: `${bot.user.username}`,
                  icon_url: `${bot.user.avatarURL}`
              },
              description: `:ping_pong: Pong! I'm watching over **${bot.users.array().length} users** in over **${bot.guilds.array().length} servers**!`,
              fields: [
                  {
                      name: `:information_source: Latency:`,
                      value: `\`${m.createdTimestamp - message.createdTimestamp}ms\``,
                      inline: true
                  },
                  {
                      name: `:heartpulse: Heartbeat:`,
                      value: `\`${Math.round(bot.ping)}ms\``,
                      inline: true
                  }
              ],
              footer: {
                text: `Serving for ${Math.round(bot.uptime / (1000 * 60 * 60))} hours, ${Math.round(bot.uptime / (1000 * 60)) % 60}  minutes, & ${Math.round(bot.uptime / 1000) % 60} seconds! ツ`
              }
          },
      })
  })
}

module.exports.help = {
  name: "ping",
  usage: ``,
  information: ""
}
