const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**404 Not Found**")
        .setImage("https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif")
        .setThumbnail("https://media.giphy.com/media/KyCGSO14V4Zi0Xl6Tu/giphy.gif")
        .setColor(0x00AE86)
        .addField("Lakabı", "404 Not Found", true)
        .addField("Yetenekleri", `
        *Sürekli Error Verip İnsanları Sinir Etmek
   *404 Not Found
   `, true)
   .addField("Tek bildiği cümle", `404 Not Found`, true)
   .addField("YAPIMCI", "ByCoder.exe#3940")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'errorbot', 
  description: 'Error Botun Tanıtım Kartını Gönderir',
  usage: 'errorbot'
};
