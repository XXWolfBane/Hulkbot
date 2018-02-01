module.exports = (bot, member) => {
   console.log(`${member.displayName} just joined ${member.guild.name}`) 
   member.send(`Welcome to ${member.guild.name}, ${member.displayName}!`)
   const channel = member.guild.channels.find('name', 'welcome')
   if (!channel) return;
   
   channel.send(`Welcome to ${member.guild.name}, ${member.displayName}!`)
}
