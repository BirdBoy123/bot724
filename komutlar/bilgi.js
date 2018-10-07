const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Bot İle İlgili Bilgileri Özel Mesajlarına Gönderdim. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Yapımcı: ByCoder.exe#3940 **404 Not Found**\n\n_**__BOTU EKLEMEK İÇİN LİNK:__**_\n\nhttp://eklink.net/evibXwV \n\n_**Linkler:**_\n\n\n**__Bot Davet Linki: http://eklink.net/evibXwV__** **__Discord Bots Linki: http://eklink.net/CQdv__** \n\n**:copyright: 2018 __Error Bot__**');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
