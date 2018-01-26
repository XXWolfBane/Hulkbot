module.exports = (guild, bot, discord) => {
  const np = require('node-persist')
  
  const guildsettings = new discord.Collection()
  
  bot.on('guildCreate', () => {
    guildsettings.set(con)
  })
  
  np.init().then(() => {
    const con = [
    np.setItem('guild name', guild.name),
    np.setItem('filter', false),
    np.setItem('prefix', "h!"),
    np.setItem('welcome', 'Hello! Welcome to the server!'),
    np.setItem('log', guild.channels.find('name', 'log')),
    np.setItem('modrole', guild.roles.find('name', 'Admin')),
    np.setItem('welcomechannel', guild.channels.find('name', "welcome")),
      ]
  });
};
