const Discord = module.require('discord.js');
const emoji = require('./../emojis.json');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

if(message.member.hasPermission("MANAGE_ROLES")) {
  let removingMember = message.mentions.members.first();
  if(!removingMember) return bot.mentionMsg(message)
  
  let removingRole = message.mentions.roles.first();
  if(!removingRole) return message.reply("<:RedTick:553254041304563713>" + ` There is no **${removingRole.name}** role!`);
   
  removingMember.removeRole(removingRole.id);
  message.channel.send(emoji.ModAction + removingMember + " you have lost the role **" + removingRole.name + "**!");
  }else {
    return message.reply("<:RedTick:553254041304563713> You need to have the `MANAGE_ROLES` permission for that!")
  };
}


module.exports.help = {
    name: "removerole"
}