module.exports = (bot, member, message) => {
  let guild = bot.guilds.get('360608749741670400')
  
  member.addRole(guild.roles.get('427587785461858305')).then(r => {
    console.log(`${member.name} just joined ${guild.name}!`)
    message.channel.send(`<@${member.id}>, welcome to ${guild.name}! You have been assigned the ${r.name} role! Wait 20 minutes to get the 'Embryo' role, and then you can chat!`)
    setTimeout(() => {
      member.removeRole(r).then(() => {
        member.addRole(guild.roles.get('427589929464496133'))
        member.send("Hey! You just ranked up in " + guild.name + "! You can now chat in the server!")
      })
    },1200000)
  }) 
}
