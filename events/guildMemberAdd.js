module.exports = (bot, member) => {
   let guildids = ["318532861638737931", "264445053596991498",  "110373943822540800"]
   
   if (member.guild.id.includes(guildids)) {
      return;
   }
   console.log(`${member.displayName} just joined ${member.guild.name}`) 
   // SOON: member.send(`Welcome to ${member.guild.name}, ${member.displayName}!`)
   const channel = member.guild.channels.find('name', 'welcome')
   if (!channel) return;
   bot.on("message", message => {
      if (message.channel.type == "dm") {
         return;
      } else {
      if (message.content == "h!disablewelcome") {
         if (message.member.hasPermission("MANAGE_SERVER")) {
                  message.channel.send("Welcome Messages were turned off.")
         } else {
            message.channel.send("No permissions... Sorry fam.")
         }
      } else {
         channel.send(`Welcome to ${member.guild.name}, ${member.displayName}!`)
      }
     }
   })
}
