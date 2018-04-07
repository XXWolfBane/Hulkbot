const r = "true"

module.exports = (bot) => {
    bot.on("message", message => {
        if (message.author.id == process.env.oid) {
            if (message.content == "h!toggle off") {
                r = "false"
                message.channel.send(`Okay, I turned my status rotator off.`)
            }
            if (message.content == "h!toggle on") {
                r = "true"
                message.channel.send(`Okay, I turned my status rotator back on.`)
            }
        } else {
            return;
        }
    })
    if (r == "true") {
        let status = ["You wouldn't like me when I'm angry.", `bot.guilds.array().length`, "https://bot.hulkbot.ml/home"]
        setInterval(() => {
        let gameval = 0;
        if (gameval == status.length) {
            gameval = 0;
            }
        var game = status[gameval]
        bot.user.setActivity(`for h!help | ${game}`, {type: "WATCHING"})
        }, 45000)
    } else {
        return;
    }
}
 
