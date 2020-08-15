const Discord = module.require('discord.js');
const emoji = require('./../emojis.json');
const db = require('quick.db'); //DB lib
var currencyFormatter = require('currency-formatter'); //For currency
var ms = require('parse-ms'); //MS lib
const fromExp = require('from-exponential');

module.exports.run = async (bot, message, args) => {
  let member = message.member;
  let safe = await db.fetch(`hasSafe_${member.id}`);
  if(safe == null){
    message.channel.send("You do not have a safe!")
    return
  }
  let keys = await db.fetch(`itemKeys_${member.id}`);
  if(keys < 1){
    message.channel.send("You do not have any keys, how do you expect to get in your safe?")
    return
  }
  if(!args[1]){
    message.channel.send("How much money are you depositing?")
    return
  }
  
  let balance = await db.fetch(`balance_${member.id}`);
  let safeBalance = await db.fetch(`safeBalance_${member.id}`);
  if (balance == null) balance = 0;
  if(safeBalance == null) safeBalance = 0;
  
  if(args[1] == "all"){
    db.subtract(`balance_${member.id}`, balance)
    db.add(`safeBalance_${member.id}`, balance)
    let shopEmbed = new Discord.RichEmbed()
      .setColor(16752128)
      .setFooter(message.author.username + " is depositing money", process.env.BOT_ICON)
      .setDescription("You deposited all of your money!")
    message.channel.send(shopEmbed);
    return
  }
  let amt = args[1]
  if (!(amt >= 1)) amt = 1
  amt = Number(amt)
  if(balance < amt) return message.reply("You do not have enough money!")
  db.subtract(`balance_${member.id}`, amt)
  db.add(`safeBalance_${member.id}`, amt)
  let shopEmbed = new Discord.RichEmbed()
      .setColor(16752128)
      .setFooter(message.author.username + " is depositing money", process.env.BOT_ICON)
      .setDescription("You deposited " + currencyFormatter.format(amt, { code: 'USD' }) + "!")
    message.channel.send(shopEmbed);
}
module.exports.help = {
  name: 'deposit'
}
