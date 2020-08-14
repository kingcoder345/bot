const Discord = module.require('discord.js');
const emoji = require('./../emojis.json');

module.exports.run = async (bot, message, args) =>{
  if (!args[1]) {
    message.channel.send('<:RedTick:553254041304563713> Please specify a number of sides!');
    return;
  }
  let numSides = args[1]
  
  if (numSides > 1000) {
    message.channel.send('The maximum sides is **1000**.');
    return;
  }
  if (numSides < 2) {
    message.channel.send('You must have at least **2** sides!');
    return;
  }
  let diceEmoji = ":diamond_shape_with_a_dot_inside:"
  if (numSides == 2) {
    diceEmoji = "<:GoldCoin:580791401495789569>"
  }
  if (numSides == 4) {
    diceEmoji = "<:d4:554746672857743361>"
  }
  if (numSides == 6) {
    diceEmoji = "<:d6:554746672354164756>"
  }
  if (numSides == 8) {
    diceEmoji = "<:d8:554746674082480129>"
  }
  if (numSides == 10) {
    diceEmoji = "<:d10:554746673016864768>"
  }
  if (numSides == 12) {
    diceEmoji = "<:d12:554746672836640792>"
  }
  if (numSides == 20) {
    diceEmoji = "<:d20:554746673813913626>"
  }
  let answer = String(Math.floor(Math.random()*numSides) + 1);
  let diceRoll = new Discord.RichEmbed()
  .setTitle(`${diceEmoji}`)
  .setColor('#0d0d0d')
  .setFooter(`out of ${numSides} sides.`)
  .addField('Rolled:', answer);
  message.channel.send(diceRoll);
}
module.exports.help = {
  name: "diceroll"
}
