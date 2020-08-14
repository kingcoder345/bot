const Discord = module.require('discord.js');
const emoji = require('./../emojis.json');
const db = require('quick.db'); //DB lib
var currencyFormatter = require('currency-formatter'); //For currency
var ms = require('parse-ms'); //MS lib
const fromExp = require('from-exponential');

module.exports.run = async (bot, message, args) => {
  let member = message.member;
  let cookies = await db.fetch(`itemCookies_${member.id}`);
  if(!args[1]){
    message.channel.send("Specify a food to eat! Either **cookie** or nothing else :(")
  }
  let food = args[1]
  
  if(food == "cookie"){  
    if(cookies < 1) return message.reply("You do not have enough cookies!")
    db.subtract(`itemCookies_${message.author.id}`, 1)
    var embed = new Discord.RichEmbed()
      .setColor(0x6EFFE4)
      .setTitle(member.displayName + " ate a cookie")
      .setDescription(":cookie: You ate a cookie!")

    message.channel.send(embed)
  }
if(food == "pizza"){  
    if(cookies < 1) return message.reply("You do not have that amount of pizzas")
    db.subtract(`itemPizzas_${message.author.id}`, 1)
    var embed = new Discord.RichEmbed()
      .setColor(0x6EFFE4)
      .setTitle(member.displayName + " has eaten pizza")
      .setDescription(":pizza: You ate a pizza!")

    message.channel.send(embed)
  }
}
module.exports.help = {
  name: 'eat'
}
