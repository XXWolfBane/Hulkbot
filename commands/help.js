module.exports.run = (bot, message, args, suffix) => {
  let fields = [
    {
      name: ":gear: Prefix:",
      value: `\`h!\``,
      inline: true
    },
    {
      name: ":hammer_pick: Moderation:",
      value: `mute, unmute, kick, ban, auth, purge, perms, filteroff, and filteron.`,
      value: `\`\`\`css\nauth = "No Usage Provided!"\nban = "Mention | User ID"\nfilteron = "No Usage Provided!"\nfilteroff = "No Usage Provided!"\nkick = "Mention | User ID"\nmute = "Mention | User ID"\nunmute = "Mention | User ID\npurge = "Amount of Msgs"\`\`\``,
    },
    {
      name: ":robot: Bot:",
      value: `\`\`\`css\njoinserver = "No Usage Provided!"\ninvite = "No Usage Provided!"\ninfo = "No Usage Provided!"\nping = "No Usage Provided!"\nuptime = "No Usage Provided!"\`\`\``,
    },
           {
      name: ":lollipop: Fun:",
      value: `\`\`\`css\navatar = "Blank for youself | Mention for others"\nbork = "Mention | User ID"\ncoinflip = "No Usage Provided!"\nsay = "message"\nmyid = "No Usage Provided!"\nserverid = "No Usage Provided!"\nyomomma = "No Usage Provided!"\n\`\`\``,
    },
    {
      name: "Need More Help?",
      value: `[Click Here!](https://bot.hulkbot.ml/commands)`,
    }
  ];
    if(suffix == "-o") {
      embed_fields.push({
        name: ":medal: Owner:",
				value: `\`\`\`css\nshutdown = "No Usage Provided!"\nchangegame = "No Usage Provided!"\`\`\``,
        inline: true
      });
    } else {
      null;
    };
  message.channel.send({
    embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Help Message!",
    url: "https://discord.gg/XvMA2rJ",
    description: "Help has arrived! ( ͡° ͜ʖ ͡°)",
    fields: fields,
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: ""
    }
  }
})
}

module.exports.help = {
  name: "help"
}
