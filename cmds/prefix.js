const Discord = module.require('discord.js');
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You are not an administrator!")
  if(!args[1]) return message.reply("You need to specify a prefix!")
  let prefix = args[1]
  db.set(`prefix_${message.guild.id}`, prefix)
  message.channel.send("Changed the prefix to " + prefix)
  message.guild.members.get(bot.user.id).setNickname("Vertex [" + prefix + "]");
}
module.exports.help = {
  name: 'prefix'
}
