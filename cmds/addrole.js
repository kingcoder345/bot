const Discord = module.require("discord.js");
const emoji = require("./../emojis.json");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  if (message.member.hasPermission("MANAGE_ROLES")) {
    let addingRole = message.mentions.roles.first();
    if (!addingRole)
      return message.reply("There is no **" + addingRole.name + "** role!");

    let addingMember = message.mentions.members.first();
    if (!addingMember) return bot.mentionMsg(message);

    addingMember.addRole(addingRole.id);
    message.channel.send(
      addingMember +
        " you have been given the role **" +
        addingRole.name +
        "**!"
    );
  } else {
    return message.reply(
      emoji.ERR + "You need to have the `MANAGE_ROLES` Permission"
    );
  }
};

module.exports.help = {
  name: "addrole"
};
