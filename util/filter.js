module.exports = (bot, message, discord) => {
  let idArray = ["427578849610432540", "415242362147569674", "406143731159400468", "388006465471774743", "380388900150968321", "417459952966303744"]
  if (idArray.includes(message.channel.id)) {
      return;
 } else {
    if (message.content.startsWith("h!")) {
        message.delete(2500)
        message.channel.send("No bot commands here, go to the bot commands channel. Thanks! :D").then(m => m.delete(6000))
  }
 }
}
 
