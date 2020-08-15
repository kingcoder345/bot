const Discord = module.require('discord.js');
const ms = require('ms');
const emoji = require('./../emojis.json');

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
            let addTempMember = message.mentions.members.first();
            if(!addTempMember) return bot.mentionMsg(message)

            let tempRole = message.mentions.roles.first();
            if(!tempRole) return message.reply(emoji.RedTick + "There is no such role!");
            
            let time2 = args[3];
            if(!time2) {
              message.channel.send("You need to specify a time! (Example: 1m = 1 minute)");
              return
            }else {
              addTempMember.addRole(tempRole.id);
              message.channel.send(addTempMember + " you have been given the role **" + tempRole.name + "** for " + ms(ms(time2), {long: true}) + ".");

              setTimeout(function(){
                addTempMember.removeRole(tempRole.id);
                message.channel.send(addTempMember + " you role has been removed! \nYour glory lasted " + ms(ms(time2), {long: true}) + "")

              }, ms(time2));

              };
              }else {
                return message.reply(":x: " + "| You need to have the \"ADMINISTRATOR\" Permission")
              };
}

module.exports.help = {
    name: "addtemprole"
}