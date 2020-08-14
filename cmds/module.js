const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_SERVER"))
    return message.channel.send(
      "You don't have permission to run this command!"
    );
  let module = args[1];
  let enabled = args[2];
  if (!module)
    return message.channel.send("Please say what module you want to enable!");
  if (!enabled)
    return message.channel.send("Please say if you want to enable or disable");
  if (enabled == "enable") enabled = true;
  if (enabled == "disable") enabled = false;

  if (module.toLowerCase() == "serveredit") {
    if (enabled) {
      bot.db.set(`serverEdit_${message.guild.id}`, true);
      message.channel.send("Enabled the Server Edit module.");
      return;
    }
    if (!enabled) {
      bot.db.set(`serverEdit_${message.guild.id}`, false);
      message.channel.send("Disabled the Server edit module.");
    }
  }
};
module.exports.help = {
  name: "module"
};
