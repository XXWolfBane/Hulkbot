
const Discord = require('discord.js');


module.exports.run = (bot, message, args) => {
	let muteRole = message.guild.roles.find("name", "Muted");

	if(!member.roles.find("name", "Muted")) return message.channel.send(`:x: ${member.user.username}, isn't muted!`).then(m => m.delete(2500))
		
	member.removeRole(muteRole.id);
	message.channel.send(`${member.user.username}, is now unmuted`).then(m => m.delete(2500))
}

module.exports.help = {
	name: "unmute",
	usage: `[user] (reason)`,
	information: ""
}
