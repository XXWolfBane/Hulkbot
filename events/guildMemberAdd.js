module.exports = (bot, member) => {
   let guildids = ["318532861638737931", "264445053596991498",  "110373943822540800"],
   autoroles = {
      "robloxlovers": "428953426840256513",
      "learning": "434070145397161986"
   },
   autoroleguilds = {
     "1": "426909155832365066",
     "2": "419160188541599744"
   }
   
   if (guildids.includes(member.guild.id)) {
      return;
   } else {
   console.log(`${member.displayName} just joined ${member.guild.name}`);
   // SOON: member.send(`Welcome to ${member.guild.name}, ${member.displayName}!`);
   const channel = member.guild.channels.find('name', 'welcome');
   if (!channel) return;
         channel.send(`Welcome to ${member.guild.name}, ${member.displayName}!`);
   }
   
   if (member.guild.id == autoroleguilds.1) {
      member.addRole(autoroles.robloxlovers)
   } else {
      if (member.guild.id == autoroleguilds.2) {
         member.addRole(autoroles.learning)
      }
   }
}
