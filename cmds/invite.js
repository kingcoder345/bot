const Discord = module.require('discord.js');
const emoji = require('./../emojis.json');

module.exports.run = async (bot, message, args) => {
  let inviteEmbed = new Discord.RichEmbed()
    .setDescription("Here is my invite :)) **[invite link](https://discord.com/api/oauth2/authorize?client_id=739935176871903332&permissions=8&scope=bot)** for Quackbot.")
    .setColor(16752128)
    .setFooter("Vertex | Invite Link")
    .setAuthor("Invite Link ", null, null)
  message.channel.send(inviteEmbed);
}
module.exports.help = {
  name: 'invite'
}
