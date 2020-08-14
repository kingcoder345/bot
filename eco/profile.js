const Discord = require('discord.js');
const emoji = require('./../emojis.json');
const fromExp = require('from-exponential');
const db = require('quick.db');
var currencyFormatter = require('currency-formatter'); //For currency
var fs = require('fs'); //FileSystem
let conf = JSON.parse(fs.readFileSync("./config.json", "utf8")); //Config file

exports.run = async (bot, message, args) => { //Collecting info about command
  let member = message.mentions.members.first();
  if (!member) member = message.member;

  let balance = await db.fetch(`balance_${member.id}`);
  let itemCookies = await db.fetch(`itemCookies_${member.id}`);
  let itemPizzas = await db.fetch(`itemPizzas_${member.id}`);
  let itemKeys = await db.fetch(`itemKeys_${member.id}`);
  let safeBalance = await db.fetch(`safeBalance_${member.id}`);
  let itemSwords = await db.fetch(`itemSwords_${member.id}`);

  
  if(!balance) balance = 0;
  if(!itemCookies) itemCookies = 0;
  if(!itemPizzas) itemPizzas = 0;
  if(!itemKeys) itemKeys = 0;
  if(!safeBalance) safeBalance = 0;
  if(!itemSwords) itemSwords = 0;

  
  let Rpass = await db.fetch(`hasRewardPass_${member.id}`);
  let hasRpass = emoji.x
  if(Rpass == "true") hasRpass = emoji.Check
  
  let safe = await db.fetch(`hasSafe_${member.id}`)
  let hasSafe = emoji.x
  if(safe == "true") hasSafe = emoji.Check
  
  Number(itemCookies)
  Number(balance)


  var embed = new Discord.RichEmbed()
    .setColor("#6EFFE4")
    .setTitle("Profile of " + member.displayName)
    .setDescription("**Balance:** " + currencyFormatter.format(balance, { code: 'USD' })
    + "\n:cookie:**Cookies:** " + itemCookies
    + "\n:pizza:**Pizzas:** " + itemPizzas                    
    + "\n:money_with_wings:**Reward Pass:**" + hasRpass
    + "\n:key:**Keys:** " + itemKeys
    + "\n:bank:**Safe:** " + hasSafe
    + "\n:moneybag:**Safe Balance:** " + currencyFormatter.format(safeBalance, { code: 'USD' })
    + "\n:crossed_swords:**Swords:** " + itemSwords
    );

  message.channel.send(embed)
}

module.exports.help = {
  name: 'profile'
}