const w = require('weather-js');
const discord = require(`discord.js`);


module.exports.run = (bot, message, args) => {
	loc = message.content.substring(10)
	if (!loc) {
		m.channel.sendMessage("You need to supply a City!")
		return;
	}
	w.find({search: loc, degreeType: 'F'}, function(err, result) {
	if (err) {
		message.channel.sendMessage(err)
     };
     let area = result[0];

    	let embed = new discord.RichEmbed()
      .setColor(message.guild.me.displayHexColor !='#000000' ? message.guild.me.displayHexColor : "7289DA")
      .setAuthor(`☁ Weather for ${area.location.name}`)
      .setDescription(`
         **Temperature:** ${area.current.temperature}°F
         **Feels Like:** ${area.current.feelslike}°F
         **Clouds:** ${area.current.skytext}
         **Humidity:** ${area.current.humidity}%
         **Wind Speed:** ${area.current.winddisplay}
         `);
   	message.channel.send({ embed });
  });
};

module.exports.help = {
  name: "weather"
};
