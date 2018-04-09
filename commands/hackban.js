module.exports.run = (bot, message, args, discord) => {
  let mid = args.join(' ');
  
    bot.fetchUser(mid).then(id => {
      message.guild.ban(id).then(message.channel.send("Just hackbanned the user with ID "+id+".").catch(err => {
        message.channel.send("Failed to ban user with the id "+id+".")
        console.log(err)
      })
    }).catch(() => {
      message.channel.send(`There's no user with the ID of ${mid}, please try again. :face_palm:`)
    })
}

module.exports.help = {
  name: "hackban"
}
