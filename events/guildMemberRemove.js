module.exports = (bot, member) => {
    console.log(`${member.displayName} just left ${member.guild.name}.`)
    
    let channel = member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    
    channel.send(`:dizzyface: ${member.displayName} just left ${member.guild.name}.`)
}
