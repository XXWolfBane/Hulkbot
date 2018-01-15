const w = require('weather-js');
const discord = require(`discord.js`);


module.exports.run = (bot, message, args) => {
	loc = message.content.substring(10)
	if (!loc) {
		m.channel.sendMessage("You need to supply a City!")
		return
	}
	w.find({search: loc, degreeType: 'F'}, function(err, result) {
	if (err) {
		message.channel.sendMessage(err)
	};

    	let embed = new discord.RichEmbed()
     	 .setColor(message.guild.me.displayHexColor !='#000000' ? message.guild.me.displayHexColor : "7289DA")
     	 .setAuthor(`☁ Weather for ${result[0].location.name}`)
      	 .setDescription("\nTemperature: " + result[0].current.temperature + "°C\nFeels like: " + result[0].current.feelslike + "°C\n" + result[0].current.skytext + "\n" + result[0].current.humidity + "% Humidity \nWind Speed: " + result[0].current.winddisplay)
    	 .setFooter(`dank`)
   	 .addField(`Title`, `des`)
   	message.channel.send({ embed })
  });
}

module.exports.help = {
  name: "weather"
}
