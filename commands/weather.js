const w = require('weather-js');
const discord = require(`discord.js`);


module.exports.run = (bot, message, args) => {
  w.find({
    search: args[0],
    degreetype: `F`
  }).then(result => {
    JSON.stringify(result, null, 2).then(location =>{
        let embed = new discord.RichEmbed()
          .setColor(message.guild.me.displayHexColor !='#000000' ? message.guild.me.displayHexColor : "7289DA")
          .setAuthor(`:cloud: **Weather for ${location.name}**`)
          .setDescription()
          .setFooter(foot);

       message.channel.send({ embed })
    });
  });
}

module.exports.help = {
  name: "weather"
}
