const m = require("discord-music-bot");

module.exports.run = (bot, message, args) => {
  var serverName = "Hulkbot Base (and more)";
  var textChannelName = "music";
  var voiceChannelName = "Hulk's Private Music Channel";
  var aliasesFile = "";
  var botToken = process.env.botToken;
m.run(serverName, textChannelName, voiceChannelName, aliasesFile, botToken, ytapikey);
m.setYoutubeKey(process.env.yt)
}

module.exports.help = {
  name: "play"
}
