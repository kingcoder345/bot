const Discord = module.require('discord.js');
const emoji = require('./../emojis.json');
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<:RedTick:553254041304563713> You don't have perms, sorry.")
   if(!args[1]) return message.channel.send("<:RedTick:553254041304563713> Please specify a number of messages to delete with the command.");
   let delmsg = args[1]
  message.delete()
  message.channel.bulkDelete(delmsg).then(() => {
  message.channel.send("<:ModClearMessages:553261339397849109> Deleted " + delmsg + " message(s).").then(msg => msg.delete(3000));
});
}

module.exports.help = {
    name: "purge"
}