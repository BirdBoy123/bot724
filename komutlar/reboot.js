const Discord = require('discord.js');

exports.run = (client, message, args) => {
	
    message.channel.send(`Bota Yeni Komutlar Yüklendi. __eb+yardım__ Yazarak Yeni Komutları Öğrenebilirsiniz.`).then(msg => {
    console.log(`Discord: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};
