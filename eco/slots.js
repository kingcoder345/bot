const Discord = module.require("discord.js");
const emoji = require("./../emojis.json");
const fromExp = require("from-exponential");
const db = require("quick.db"); //DB lib
var currencyFormatter = require("currency-formatter"); //For currency
var ms = require("parse-ms"); //MS lib

const casinoBalance = require("quick.db");

let amount = (module.exports.run = async (bot, message, args) => {
  let user = message.mentions.members.first();

  var replys1 = [
    ":gem: : :gem: : :gem: ",
    ":lemon: : :lemon: : :lemon: ",
    ":seven: : :seven: : :seven: ",
    ":bell: : :bell: : :bell:",
    ":cherries: : :cherries: : :cherries: ",
    ":star: : :star: : :star: ",
    ":gem: : :star: : :seven: ",
    ":star: : :bell: : :bell:",
    ":star: : :star: : :cherries: ",
    ":gem: : :gem: : :cherries:",
    ":gem: : :seven: : :seven: ",
    ":star: : :bell: : :lemon: ",
    ":star: : :star: : :cherries: ",
    ":seven: : :star: : :star: ",
    ":star: : :star: : :seven: ",
    ":gem: : :gem: : :seven: "
  ];
  let reponse = replys1[Math.floor(Math.random() * replys1.length)];

  var replys2 = [
    ":gem: : :gem: : :gem: ",
    ":lemon: : :lemon: : :lemon: ",
    ":seven: : :seven: : :seven: ",
    ":bell: : :bell: : :bell:",
    ":cherries: : :cherries: : :cherries: ",
    ":gem: : :star: : :seven: ",
    ":star: : :bell: : :bell:",
    ":star: : :star: : :cherries: ",
    ":gem: : :gem: : :cherries:",
    ":gem: : :seven: : :seven: ",
    ":star: : :bell: : :lemon: ",
    ":star: : :star: : :cherries: ",
    ":seven: : :star: : :star: ",
    ":star: : :star: : :seven: ",
    ":gem: : :gem: : :seven: ",
    ":gem: : :cherries: : :cherries:",
    ":gem: : :bell: : :star:"
  ];
  let reponse2 = replys2[Math.floor(Math.random() * replys2.length)];
  var replys3 = [
    ":lemon: : :lemon: : :lemon: ",
    ":bell: : :bell: : :bell:",
    ":cherries: : :cherries: : :cherries: ",
    ":star: : :star: : :star: ",
    ":gem: : :star: : :seven: ",
    ":star: : :bell: : :bell:",
    ":star: : :star: : :cherries: ",
    ":gem: : :gem: : :cherries:",
    ":gem: : :seven: : :seven: ",
    ":star: : :bell: : :lemon: ",
    ":star: : :star: : :cherries: ",
    ":seven: : :star: : :star: ",
    ":star: : :star: : :seven: ",
    ":gem: : :gem: : :seven: "
  ];
  let reponse3 = replys3[Math.floor(Math.random() * replys3.length)];

  let random = Math.floor(Math.random() * 100) + 1;

  const embed = new Discord.RichEmbed()
    .setColor("#FE0101")
    .setDescription(
      `**[ :slot_machine: ${message.author} launched the slot machine! :slot_machine: ]**`
    )
    .addField("**-------------------**", "** **")
    .addField(
      `${reponse} \n \n${reponse2}**<    You have won ${random} chips!** \n \n${reponse3}`,
      `** **`
    )
    .addField("**-------------------**", "** **");

  if (casinoBalance < 19) return message.reply("You do not have enough chips!");
  db.subtract(`casinoBalance_${message.author.id}`, 20);
  db.add(`balance_${message.author.id}`, random);

  message.channel.send(embed);
});
module.exports.help = {
  name: "slots"
};
