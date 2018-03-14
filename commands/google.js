module.exports.run = (bot, message, args, discord) => {
 const chan = message.channel
 const googleIt = require('google-it');
 let search = args.join(' ');
  
 googleIt({'query', search}).then(results => {
    chan.send(`These are the results I found for ${search}:\n${results}`)
  }).catch(error => console.error(err))
}

module.exports.help = {
  name: "search"
}
