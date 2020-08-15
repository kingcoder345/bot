const Discord = module.require('discord.js');
const emoji = require('./../emojis.json');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("MANAGE_ROLES")) {
            let addingRole = message.mentions.roles.first();
            if(!addingRole) return message.reply(emoji.RedTick + " There is no **" + addingRole.name + "** role!");
                
            message.guild.members.forEach(member => {
            member.addRole(addingRole)
            })
            message.channel.send("I have added the roles!")
              }else {
  return message.reply(emoji.ERR + "You need to have the `MANAGE_ROLES` Permission")
}
};

module.exports.help = {
    name: "addroleall"
};