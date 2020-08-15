const Discord = module.require("discord.js");
const emoji = require("./../emojis.json");
const fromExp = require("from-exponential");
const db = require("quick.db"); //DB lib
var currencyFormatter = require("currency-formatter"); //For currency
var ms = require("parse-ms"); //MS lib

module.exports.run = async (bot, message, args) => {
  let member = message.member;
  let Rpass = await db.fetch(`hasRewardPass_${member.id}`);
  let safe = await db.fetch(`hasSafe_${member.id}`);
  if (!args[1]) {
    let shopEmbed = new Discord.RichEmbed()
      .setColor(16752128)
      .setFooter(
        "Vertex | Use d!shop <item> to buy something",
        process.env.BOT_ICON
      )
      .setAuthor("QuackBot Shop", message.author.displayAvatarURL)
      .addField(
        ":cookie: Cookie | $1.00 | `cookie`",
        "This cookie does nothing, all you can do it eat it...",
        false
      )
      .addField(":pizza: Pizza | $10.00 | `Pizza`", "Welp dinner?", false)
      .addField(
        ":closed_book: Reward Pass | $125.00 | `rewardpass`",
        ":warning:**You can not sell this item** \nThis allows you to use the `d!reward` command.",
        false
      )
      .addField(
        ":key: Key | $5.00 | `key`",
        ":warning:**You can not sell this item** \nThis allows you to lock/unlock your safe. It is needed to use the safe. The more keys you have, the more money you can hold in your safe.",
        false
      )
      .addField(
        ":bank: Safe | $1500.00 | `safe`",
        ":warning:**You can not sell this item** \nThis lets you store your money without worrying about it being stolen.",
        false
      )
      .addField(
        ":crossed_swords: Sword | $135.00 | `sword`",
        "This lets you fight in the dungeon.",
        false
      )
    //.addField(":question: Unknown | $0.00 | `unknown`", "N/A", false)
    message.channel.send(shopEmbed);
  }
  let item = args[1];
  let num = args[2];
  if (!num) num = 1;
  let balance = await db.fetch(`balance_${member.id}`);
  if (!balance) balance = 0;
  num = Number(num);
  if (!(num > 0)) num = 1;

  if (item == "cookie") {
    let balreq = num * 1;
    if (balance < balreq) return message.reply("You do not have enough money!");
    db.subtract(`balance_${message.author.id}`, balreq);
    db.add(`itemCookies_${message.author.id}`, num);
    var embed = new Discord.RichEmbed()
      .setColor(0x6effe4)
      .setTitle(member.displayName + " bought cookies")
      .setDescription("You bought " + num + " cookies!");

    message.channel.send(embed);
  }
  if (item == "rewardpass") {
    num = 1;
    if (Rpass == "true")
      return message.reply("You already have the Reward Pass!");
    let balreq = num * 25;
    if (balance < balreq) return message.reply("You do not have enough money!");
    db.subtract(`balance_${message.author.id}`, balreq);
    db.set(`hasRewardPass_${message.author.id}`, "true");
    var embed = new Discord.RichEmbed()
      .setColor(0x6effe4)
      .setTitle(member.displayName + " bought a Reward Pass")
      .setDescription("You bought the Reward Pass!");

    message.channel.send(embed);
  }
  if (item == "pizza") {
    let balreq = num * 1;
    if (balance < balreq) return message.reply("You do not have enough money!");
    db.subtract(`balance_${message.author.id}`, balreq);
    db.add(`itemPizzas_${message.author.id}`, num);
    var embed = new Discord.RichEmbed()
      .setColor(0x6effe4)
      .setTitle(member.displayName + " bought pizzas")
      .setDescription("You bought " + num + " pizzas!");

    message.channel.send(embed);
  }
  if (item == "key") {
    let balreq = num * 5;
    if (balance < balreq) return message.reply("You do not have enough money!");
    db.subtract(`balance_${message.author.id}`, balreq);
    db.add(`itemKeys_${message.author.id}`, num);
    var embed = new Discord.RichEmbed()
      .setColor(0x6effe4)
      .setTitle(member.displayName + " bought keys")
      .setDescription("You bought " + num + " keys!");

    message.channel.send(embed);
  }
  if (item == "safe") {
    num = 1;
    if (safe == "true") return message.reply("You already have a Safe!");
    let balreq = num * 1500;
    if (balance < balreq) return message.reply("You do not have enough money!");
    db.subtract(`balance_${message.author.id}`, balreq);
    db.set(`hasSafe_${message.author.id}`, "true");
    var embed = new Discord.RichEmbed()
      .setColor(0x6effe4)
      .setTitle(member.displayName + " bought a Safe")
      .setDescription("You bought a Safe!");

    message.channel.send(embed);
  }
  if (item == "sword") {
    let balreq = num * 135;
    if (balance < balreq) return message.reply("You do not have enough money!");
    db.subtract(`balance_${message.author.id}`, balreq);
    db.add(`itemSwords_${message.author.id}`, num);
    var embed = new Discord.RichEmbed()
      .setColor(0x6effe4)
      .setTitle(member.displayName + " bought swords")
      .setDescription("You bought " + num + " swords!");
  }

    message.channel.send(embed);
  }
module.exports.help = {
  name: "shop"
};
