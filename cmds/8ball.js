const Discord = module.require("discord.js");
const emoji = require("./../emojis.json");

module.exports.run = async (bot, message, args) => {
  if (!args[1]) {
    bot.errMsg(message);
    return;
  }
  let answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  let answer = answers[Math.floor(Math.random() * answers.length)];
  let msg = new Discord.RichEmbed()
    .setTitle(":8ball:")
    .setColor("RANDOM")
    .addField("Question:", args.slice(1).join(" "))
    .addField("Answer:", answer);
  message.channel.send(msg);
};
module.exports.help = {
  name: "8ball"
};
