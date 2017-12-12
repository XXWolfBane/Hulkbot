const {RichEmbed} = require('discord.js');
const request = require('snekfetch');
const HTMLParser = require('fast-html-parser');

module.exports.run = (bot, message, args) => {
 
      const reply = message.channel.send("Searching for a random FML card (this can take a few seconds");
 
      const res = request.get('http://www.fmylife.com/random');
      const root = HTMLParser.parse(res.text);
      const article = root.querySelector('.block a');
      const downdoot = root.querySelector('.vote-down');
      const updoot = root.querySelector('.vote-up');
      const href = root.querySelector('.panel-content p.block a');
      const card = root.querySelector('.panel-content div.votes span.vote div');
      const signature = root.querySelector('.panel div.text-center');
      const link = 'http://www.fmylife.com'
      const cardId = card.rawAttrs.replace(/\D/g,'');
      let signatureDisplay = 'Author and date of this fml unkown';
      if (signature.childNodes.length === 1) {
        signatureDisplay = signature.childNodes[0].text;
      } else if (signature.childNodes.length === 3) {
        signatureDisplay = signature.childNodes[0].text.replace('-', '/') + signature.childNodes[2].text.replace('/','');
      }
  
      const embed = new RichEmbed()
        .setTitle(`FML #${cardId}`)
        .setURL(link)
        .setColor(165868)
        .setThumbnail('http://i.imgur.com/5cMj0fw.png')
        .setFooter(signatureDisplay)
        .setDescription(`_${article.childNodes[0].text}\n\n_`)
        .addField('I agree, your life sucks:', `#${updoot.childNodes[0].text}`, true)
        .addField('You deserved it:', `#${downdoot.childNodes[0].text}, true);
      if (article.childNodes[0].text.length < 5 ) {
        return message.channel.send('Something went wrong, so you\'ll have to try again in a few moments. FML');
      }
      reply.edit({embed});}
      
module.exports.help = {
  name: "fml",
  usage: "",
  information: ""
}
