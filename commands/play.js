const YTDL = require('ytdl-core')
var servers = {}

function play(connection, message) {
   var server = servers[message.guild.id]
   
   server.dispatcher = connection.playStream(YTDL(server.queue[0], filter: "audioonly"}))
   
   server.queue.shift()
   
   server.dispatcher.on('end', () => {
      if (server.queue[0]) play(connection, message)
      else connection.disconnect()
    })
  }

module.exports.run = (bot, message, args, discord) => {
  if (!args[0]) {
    message.channel.send("Please provide a song name/link!");
    return;
  }
  if (!message.member.voiceChannel) {
    message.channel.send("No voice channel? AINT NOBODY GOT TIME FOR DAT!")
    return;
  }
  if (!servers[message.guild.id]) servers[message.guild.id] = {
    queue: []
  }
  if (!message.member.voiceChannel) message.member.voiceChannel.join().then((connection) => {
    play(connection, play);
  })
    
  }
  let server = servers[message.guild.id]
} 
  
module.exports.help = {
  name: "play"
}
