const w = require('weather-js');
const discord = require(`discord.js`);


module.exports.run = (bot, message, args) => {
  
  w.find({search: args[0], degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
 
  let weather = JSON.stringify(result, null, 2)
  console.log(weather)
  let embed = new discord.RichEmbed()
      .setColor(message.guild.me.displayHexColor !='#000000' ? message.guild.me.displayHexColor : "7289DA")
      .setAuthor(`☁ Weather for ${weather.location}`)
      .setDescription(`dank`)
      .setFooter(`dank`)
      .addField(`Title`, `des`)
    

       message.channel.send({ embed })
  });
}

module.exports.help = {
  name: "weather"
}
