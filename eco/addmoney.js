const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!bot.devPerms.includes(message.author.id))
    return message.reply("You are not a dev!");
  let user = message.mentions.members.first();
  let action = args[1];
  let amount = args[3];
  if (!action) return message.channel.send("Specify an action!");
  if (!amount) return message.channel.send("Specify an amount!");
  if (isNaN(amount) == NaN)
    return message.channel.send("That is not a valid amount");
  if (amount.includes(".")) return message.channel.send("No decimals 3:<");
  amount = Number(amount);

  let bal = bot.db.fetch(`balance_${user.id}`);

  if (action == "add") {
    bot.db.add(`balance_${user.id}`, amount);
    message.channel.send("Added **" + amount + "** money to " + user + ".");
    return;
  }
  if (action == "remove") {
    bot.db.subtract(`balance_${user.id}`, amount);
    message.channel.send("Removed **" + amount + "** money to " + user + ".");
    return;
  }
  if (action == "set") {
    bot.db.set(`balance_${user.id}`, amount);
    message.channel.send("Setted **" + amount + "** money to " + user + ".");
    return;
  }
  return message.channel.send("That is not a valid action!");
};
module.exports.help = {
  name: "money",
  description:
    "Change a user's money. You can *add*, *subtract*, and *set* it.",
  usage: "money [action] [user] [amount]"
};
