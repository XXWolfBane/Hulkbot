module.exports = (bot, member) => {
   let guildids = [318532861638737931, 264445053596991498,  110373943822540800]
   
   if (member.guild.id == guildid) {
      return;
   }
   console.log(`${member.displayName} just joined ${member.guild.name}`) 
   //member.send(`Welcome to ${member.guild.name}, ${member.displayName}!`)
   const channel = member.guild.channels.find('name', 'welcome')
   if (!channel) return;
   
   channel.send(`Welcome to ${member.guild.name}, ${member.displayName}!`)
}
