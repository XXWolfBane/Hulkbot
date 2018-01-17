const config = require('../config.json')

module.exports.run = (bot, message, args) => {
  const reboot = new Promise(resolve => { // reboot; kill bot and start it again
  bot.kill('SIGTERM');
  bot = spawn('node', ['bot'], {
    cwd: path.join(__dirname, 'bot'),
    env: process.env
  });
  resolve();
});
  if (message.author.id == config.ownerid) {
    message.channel.send(":wave: Hulkbot will now restart.")
    reboot()
  } else {
    message.channel.send("Nope!")
  }
}

module.exports.help = {
  name: "restart",
  usage: ``,
  information: "Owner only."
}
