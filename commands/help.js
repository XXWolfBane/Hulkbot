module.exports.run = (bot, message, args, suffix, discord) => {
	let au = message.author.id
	let oid = process.env.oid
  let fields = [
    {
      name: ":gear: Prefix:",
      value: `\`h!\``,
      inline: true
    },
    {
      name: ":hammer_pick: Moderation:",
      value: `mute, unmute, kick, ban, auth, purge, perms, filteroff, and filteron.`,
      value: `\`\`\`ini\nauth = "Authorize Yourself!"\nban = "Need to ban someone?"\nfilteron = "Turns on the language filter!"\nfilteroff = "Turns off the language filter!"\nkick = "Need to kick someone?"\nmute = "Mute someone in chat!"\nunmute = "Unmute someone from chat!"\npurge = "Delete Messages from Chat!"\`\`\``,
    },
    {
      name: ":robot: Bot:",
      value: `\`\`\`ini\n@Hulkbot = "Get some more of that derp-awesome info!"\ninfo = "Get some basic info about the bot."\njoinserver = "Join the Support Server!"\ninvite = "Want to invite the bot?"\ninfo = "Know more about the bot!"\nping = "Pong?"\nuptime = "See how long the bot has been alive!"\nlistservers = "See the number of the bot users, channels, and guilds."\`\`\``,
    },
           {
      name: ":lollipop: Fun:",
      value: `\`\`\`ini\navatar = "Fetches an HD Image of a user!"\nbork = "Bork someone for fun!"\ncoinflip = "Heads or Tails!"\nsay = "Want me to say something?"\nmyid = "Need your own ID?"\nserverid = "Need the Server's ID?"\nyomomma = "YOMOMMA!"\nknockknock = "I'll get you a knock knock joke."\nadvice = "I'll get you some good advice, so apply it to your life boi."\nchucknorris = "I'll get you a random chuck norris joke."\`\`\``,
    },
    {
      name: ":musical_note: Music:",
      value: `\`\`\`ini\nplay = "Play a song/youtube link!"\nskip = "Skip the song."\ndisconnect = "Disconnect the bot from the voice channel."\nvolume = "Change the volume of the bot."\nresume = "Resume the playback."\nshuffle = "Shuffle the songs in the queue."\nclean = "Cleans some of the bot's messages."\nsearch = "Search for a song, and choose whether to play it or not."\nclear = "Clear the queue."`
    },
    {
      name: "Need More Help?",
      value: `[Click Here!](https://bot.hulkbot.ml/commands)`,
    }
  ];
    if (au == oid) {
      fields.push({
        name: ":medal: Owner:",
	value: `\`\`\`ini\nshutdown = "Shutdown the Bot!"\nchangegame = "Change the bot's playing status."\neval = "Execute some JavaScript from inside Discord!"\nonbot = "Change the bots status to Online!"\nidlebot = "Change the bots status to Idle!"\ndnd = "Change the bots status to Do Not Disturb."\ninvbot = "Change the bots status to Invisible!"\ndebug = "See some advanced info about the bot."\`\`\``,
        inline: false
      });
    } else {
      fields.pop({
      	name: ":medal: Owner:",
	value: `\`\`\`ini\nshutdown = "Shutdown the Bot!"\nchangegame = "Change the bot's playing status."\neval = "Execute some JavaScript from inside Discord!"\nonbot = "Change the bots status to Online!"\nidlebot = "Change the bots status to Idle!"\ndnd = "Change the bots status to Do Not Disturb."\ninvbot = "Change the bots status to Invisible!"\ndebug = "See some advanced info about the bot."\`\`\``,
	inline: false
      });
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
