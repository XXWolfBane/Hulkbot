module.exports.run = (bot, message, args, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle("Menu de Ajuda Alternativo")
  .setDescription("`Prefixo: h!`")
  .addField(`:hammer_pick: Moderação`, `auth: autorize-se!\nban: Precisa banir alguém?\nfilteron: Liga o filtro de idioma!\nfilteroff: Desliga o filtro de idioma!\nkick: Precisa chutar alguém?\nmudo: Mudo alguém no chat!\nunmute = Desativar o som de alguém do chat!\npurge: Apagar mensagens do chat!\nhackban: Precisa banir alguém que não está na sua guilda? Bani-los pelo seu ID!\nunhackban: Precisa desestimular alguém?`)
  .addField(`:robot: Informações de Bot:`, `@Hulkbot: Obtenha mais informações incríveis!\ninfo: obtenha algumas informações básicas sobre o bot.\njoinserver: Junte-se ao servidor de suporte!\nping: pong?\nuptime: Veja quanto tempo o bot está vivo!\nlistservers: Veja o número de usuários, canais e guildas do bot.`)
  .addField(`:lollipop: Fun`, `avatar: busca uma imagem em alta definição de um usuário!\nbork: Bork alguém por diversão!\ncoinflip: cabeças ou caudas!\nDiga: Quer que eu diga alguma coisa?\nmyid: Precisa da sua própria identidade?\nserverid: Precisa do ID do servidor?\nyomomma: YO MOMMA!\nknockknock: Vou te dar uma piada.\nconselho: eu vou te dar alguns bons conselhos, então aplique-o à sua vida boi.`)
  .addField(`:musical_note: Música`, `play: Play a song/youtube link!\nskip: Skip the song\ndisconnect: Disconnect the bot from the voice channel.\nvolume: Change the volume of the bot.\nresume: Resume the playback.\nshuffle:Shuffle the songs in the queue.\nclean: Cleans some of the bot's messages.\nsearch: Search for a song, and choose whether to play it or not.\nclear: Clear the queue.`)
  .setTimestamp()
  .setAuthor("Hulkbot")
  
  message.channel.send({ embed })
}
 
module.exports.help = {
  name: "althelp"
}
