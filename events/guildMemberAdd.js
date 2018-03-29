module.exports = (bot, member) => {
   let guildids = ["318532861638737931", "264445053596991498",  "110373943822540800"]
   
   if (guildids.includes(member.guild.id)) {
      return;
   }
   console.log(`${member.displayName} just joined ${member.guild.name}`) 
   // SOON: member.send(`Welcome to ${member.guild.name}, ${member.displayName}!`)
   const channel = member.guild.channels.find('name', 'welcome')
   if (!channel) return;
         channel.send(`Welcome to ${member.guild.name}, ${member.displayName}!`)
}
