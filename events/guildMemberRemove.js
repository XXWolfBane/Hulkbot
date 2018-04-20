module.exports = (bot, member) => {
    console.log(`${member.displayName} just left ${member.guild.name}.`)
    let guildids = ["318532861638737931", "264445053596991498",  "110373943822540800", "349661783612719119"]
    
    if (guildids.includes(member.guild.id)) {
        return;
    }
    let channel = member.guild.channels.find('name', 'welcome')
    if (!channel) return;
        channel.send(`:dizzy_face: ${member.displayName} just left ${member.guild.name}.`)
    })
}
