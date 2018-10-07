const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**Yenilikler!**")
        .setColor(0x00AE86)
        .addField("Yenilikler Hakkında", "Bota Birsürü Yeni Komut Eklenmiştir. 8ball,çayiç,koş vb...", true)
		.addField("Denemek İçin;", "**[eb+yardım]**", true) 
   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yenilikler', 
  description: 'Yeniliklerin ne olduğunu söyler.',
  usage: 'yenilikler'
};
