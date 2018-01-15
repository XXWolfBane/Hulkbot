const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
	let member = message.mentions.members.first();
	let embed = new discord.RichEmbed()
	.setTitle(`BORK!`)
	.setDescription(`<${@member.id}> was borked by <@${message.author.id}>`)
	.setThumbnail(`https://goo.gl/gFQRX3`)
	.setColor(`RANDOM`)
	message.channel.send({ embed });
}

module.exports.help = {
	name: "bork",
}
