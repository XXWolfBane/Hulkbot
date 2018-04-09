/* var r = "true"

module.exports = (bot) => {
   let status = ["You wouldn't like me when I'm angry.", `${bot.guilds.size} servers`, "https://bot.hulkbot.ml/home"]
   setInterval(() => {
   let gameval = 0;
   if (gameval == status.length) {
        gameval = 0;
   }
   var game = status[gameval]
   bot.user.setActivity(`for h!help | ${game}`, {type: "WATCHING"})
   }, 25000)
}
*/
