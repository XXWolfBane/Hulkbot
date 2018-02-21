module.exports.run = (bot, message, args, discord) => {
  const music = require('discord.js-music-v11')
  music(bot, {volume: 100, anyoneCanSkip: false, clearInvoker: true})
  if (message.member.voiceChannel) {
    message.channel.send("Searching YT for " + args[0] + ".").then(m => m.edit("Found it! Now playing " + args[0] + "."))
    let m = args[0]
    let guild = message.member.guild;
    let dispatcher = guild.voiceConnection.playStream(music.play(m), {volume: 0.3})
    dispatcher.on('end', () => {
      message.channel.send("Left the voice channel.")
    })
  }
}

module.exports.help = {
  name: "play"
}
