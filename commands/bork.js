module.exports.run = (bot, message, args) => {
	let member = message.mentions.members.first();
	message.channel.send(`<@${member.id}> was borked by <@${message.author.id}>`);
}

module.exports.help = {
	name: "bork",
}
