const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
  let serverEdit = await bot.db.fetch(`serverEdit_${message.guild.id}`);
  if (!serverEdit)
    return message.channel.send(
      "You do not have the serverEdit module enabled!"
    );
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.reply("You do not have `MANAGE_CHANNELS` permission!");
  message.channel.edit({
    permissionOverwrites: [
      { id: message.guild.id, allow: ["SEND_MESSAGES"] },
      { id: bot.user.id, allow: ["SEND_MESSAGES"] }
    ]
  });
  message.channel.send("Unlocked the channel.");
};
module.exports.help = {
  name: "unlock"
};
