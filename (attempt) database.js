module.exports = (guild, bot, discord) => {
  const np = require('node-persist')
  
  const guildsettings = new discord.Collection()
  
  np.init().then(() => {
    const con = [
    np.setItem('guild name', guild.name),
    np.setItem('filter', false),
    np.setItem('prefix', "h!"),
    np.setItem('welcome', 'Hello! Welcome to the server!'),
    np.setItem('log', guild.channels.find('name', 'log')),
    np.setItem('modrole', guild.roles.find('name', 'Admin')),
    np.setItem('welcomechannel', guild.channels.find('name', "welcome")),
      bot.on('guildCreate', (err) => {
    guildsettings.set(con)
    if (err) console.error(err)
  })
      ]
  });
};


