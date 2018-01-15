const ms = require("ms");
const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
	if (message.member.hasPermission("MANAGE_MESSAGES")) {
		var member = message.mentions.members.first();
		if(!member) {
			var msgA = [];
			msgA.push(`= **Muted Members** =\n`)

			message.guild.members.forEach(async (m) => {
				if(m.roles.find("name", "Muted")) {
					msgA.push(`${m.user.username} <${m.user.id}>`)
				}
			});
			console.log(msgA)
			if(msgA == `= **Muted Members** =\n`){
					msgA.push(`== **Nobody is muted at the moment**==`)
			}
			message.channel.send(msgA).then(m => m.delete(25000));
			return;
		}
		let arg = message.content.split(" ").slice(1);
		let time = arg[1]
		let rarg = message.content.split(" ").slice(3)
		let reason = rarg.join(" ")
		let id = member.user.id
		let musername = member.user.username
		if(!reason){reason = "No reason given."}
		if(!time) {time = 0}
		let muteRole = message.guild.roles.find("name", "Muted");
		if(!muteRole){
			muteRole = message.guild.createRole({"name": "Muted", "hoist": false, "position":0, "permissions": 0}, "Diddn't find a role called this to mute someone..")
			message.guild.channels.forEach(async (channel, i) => {
				channel.overwritePermissions(muteRole.id, {SEND_MESSAGES: false, TALK: false}, "Had to make this for the mute role!")
			});
		}

		if(member.roles.find("name", "Muted")) return message.channel.send(`:x: ${member.user.username}, is already muted!`).then(m => m.delete(2500))
		 if(time == 0) {
			 member.addRole(muteRole.id);
	 		message.channel.send(`${member.user.username}, is now muted.`).then(m => m.delete(2500))
	 		let muteds = new Discord.RichEmbed()
	         .setColor(`#FF0000`)
	         .setAuthor(`Hi, ${member.user.username}!`)
	 				 .setDescription(`:mute: You are now muted in ${message.guild.name}.`)
	         .addField(`Muted by:`, `${message.author.username}#${message.author.discriminator}`)
	         .setFooter(`MUTED`)
	         .setTimestamp()
	 	 member.user.send({embed: muteds});
		 return;
		 }
		member.addRole(muteRole.id);
		message.channel.send(`${member.user.username}, is now muted for ${ms(ms(time), {long: true})}`).then(m => m.delete(2500))
		let muteds = new Discord.RichEmbed()
        .setColor(`#FF0000`)
        .setAuthor(`Hi, ${member.user.username}!`)
				.setDescription(`:mute: You are now muted in ${message.guild.name}.`)
      	.addField(`Time:`, `${ms(ms(time), {long: true})}`)
        .addField(`Muted by:`, `${message.author.username}#${message.author.discriminator}`)
        .addField(`Reason:`, `${reason}`)
        .setFooter(`MUTED`)
        .setTimestamp()
	 member.user.send({embed: muteds}).then(m => m.delete(ms(time)))
		setTimeout(function() {

			let mutede = new Discord.RichEmbed()
	        .setColor(`#00FF00`)
	        .setAuthor(`Hi, ${member.user.username}!`)
					.setDescription(`:speaker: You are now unmuted in ${message.guild.name}.`)
	      	.addField(`Time:`, `${ms(ms(time), {long: true})}`)
	        .addField(`Reason:`, `${reason}`)
	        .setFooter(`UNMUTED`)
	        .setTimestamp()
		  member.user.send({embed: mutede});
			member.removeRole(muteRole.id);
			message.channel.send(`${member.user.username}, is now unmuted from the last ${ms(ms(time), {long: true})}`).then(m => m.delete(2500))
		}, ms(time))
 } else {
 	message.channel.send("Sorry, but you don't have the required permissions.")
 }
}

module.exports.help = {
	name: "mute",
	usage: `[user] [time] (reason)`,
	information: "Mute the mentioned user for an ammount of time."
}
