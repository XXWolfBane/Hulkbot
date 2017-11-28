
const Discord = require('discord.js');


module.exports.run = (bot, message, args) => {
			member.removeRole(muteRole.id);
			message.channel.send(`${member.user.username}, is now unmuted`).then(m => m.delete(2500))
}

module.exports.help = {
	name: "unmute",
	usage: `[user] (reason)`,
	information: ""
}
