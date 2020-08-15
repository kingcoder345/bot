const Discord = require("discord.js")
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('d!'))
    return;  

let user = message.mentions.members.first()
let targetuser = await db.fetch(`balance_${message.author.id}`)
let author = await db.fetch(`rob_${message.author.id}_${user.id}`)
let author2 = await db.fetch(`balance_${message.guild.id}_${user.id}`)

let timeout = 1.8e+6;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(` You have already robbed someone\n\nTry again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {

let moneyEmbed = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You need atleast 200 coins in your wallet to rob someone`);

if (author2 < 200) {
    return message.channel.send(moneyEmbed)

}
let moneyEmbed2 = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${user.user.username} does not have anything you can rob`);
if (targetuser < 0) {
    return message.channel.send(moneyEmbed2)
}
    
     let random = Math.floor(Math.random() * 200) + 1; // random number 200-1, you can change 200 to whatever you'd like
    
let embed = new Discord.RichEmbed()
.setDescription(`<:Check:618736570337591296> You robbed ${user} and got away with ${random} coins`)
.setColor("#FFFFFF")
message.channel.send(embed)

 db.subtract(`balance_${user.id}`, random);
db.add(`balance_${message.author.id}`, random);
db.set(`rob_${message.guild.id}_${user.id}`, Date.now())
  
};
}

module.exports.help = {
  name:"rob",
  aliases: [""]
}
