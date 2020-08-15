const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let syntaxError = new Discord.RichEmbed()
    .setTitle(bot.syntaxErrorTitle)
    .setDescription("Please specifify text for me to embed!")
    .setColor(bot.syntaxErrorColor)
  if (!args[1]) {
    message.channel.send(syntaxError);
    return;
  }
  let inviteEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL, null)
    .setDescription(args.slice(1).join(' '))
    .setColor("#4A90E2")
  message.channel.send(inviteEmbed);
  message.delete();
}

module.exports.help = {
  name: 'embed',
  description: 'replies to you'
}