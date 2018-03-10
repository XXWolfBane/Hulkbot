module.exports = (bot, member) => {
    console.log(`${member.displayName} just left ${member.guild.name}.`)
    let guildids = [318532861638737931, 264445053596991498,  110373943822540800]
    
    if (member.guild.id == guildids) {
        return;
    }
    let channel = member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    
    member.guild.fetchBans().then(r => {
        if (r.find('id', member.id)) {
            console.log(`${member.tag} is banned from ${member.guild.name}`)
          } else {
           channel.send(`:dizzy_face: ${member.displayName} just left ${member.guild.name}.`)
          }
        })
}
