const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x2bff00)
  .addField("**Eğlence ve Kullanıcı Komutları:**", ` eb+emojiyazı = emojiyazı yazmanızı sağlar. \n eb+errorbot = Error Botun Tanıtım Kartını Gösterir. \n eb+banned = Dene ve Gör! \n eb+avatarım = Avatarınınızı Gösterir. \n eb+8ball = ErrorBot 8ball sorularınızı cevaplar. \n eb+herkesebendençay = Herkese Çay Ismarlarsınız. \n eb+koş = Koşarsınız.\n eb+çayiç = Çay İçersiniz. \n eb+çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n eb+çayaşekerat = Çaya Şeker Atarsınız. \n eb+tokat-at = Tokat Atarsınız. \n eb+yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \n eb+sunucuresmi = BOT Sunucunun Resmini Atar. \n eb+sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \n eb+kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \n eb+yenilikler = Yenlikler Hakkında Bilgi Verir. `)
  .addField("**Yetkili Komutları**", ` eb+ban = İstediğiniz Kişiyi Sunucudan Banlar. \n eb+herkeseduyur = Botun Bulunduğu Sunuculardaki Herkese Duyuru Yapar. \n eb+kick  = İstediğiniz Kişiyi Sunucudan Atar. \n eb+unban = İstediğiniz Kişinin Yasağını Açar. \n eb+sustur = İstediğiniz Kişiyi Susturur. \n eb+oylama = Oylama Açar. \n eb+duyuru = Güzel Bir Duyuru Görünümü Sağlar. \n eb+reboot = Botu Yeniler`)
  .addField("**Ana Komutlar**", " eb+yardım = BOT Komutlarını Atar. \n eb+bilgi = BOT Kendisi Hakkında Bilgi Verir. \n eb+ping = BOT Gecikme Süresini Söyler. \n eb+davet = BOT Davet Linkini Atar. \n eb+istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **ByCoder.exe#3940** ")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
