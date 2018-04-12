module.exports = (bot, member) => {
   let guildids = ["318532861638737931", "264445053596991498",  "110373943822540800"],
   autoroles = {
      "robloxlovers": "428953426840256513",
      "learning": "434070145397161986",
      "fhgrole": "360975611638054922"
   },
   autoroleguilds = {
     "rl": "426909155832365066",
     "rd": "419160188541599744",
     "fhg": "358279862324166659"
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
   
   if (member.guild.id == autoroleguilds.rl) {
      member.addRole(autoroles.robloxlovers)
   } else {
      if (member.guild.id == autoroleguilds.rd) {
         member.addRole(autoroles.learning)
      } else {
         if (member.guild.id == autoroleguilds.fhg) {
            member.addRole(autoroles.fhgrole)
         }
      }
   }
}
