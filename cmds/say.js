const Discord = module.require('discord.js');
const emoji = require('./../emojis.json');

module.exports.run = async (bot, message, args) => {
  let text = args.slice(1).join(' ')
  if(!text) return message.channel.send("Supply some text to decode!")
  
  message.delete()
  
  let newText = text.split('fuck').join(emoji.Swearing)
  newText = newText.split('FUCK').join(emoji.Swearing)
  newText = newText.split('shit').join(emoji.Swearing)
  newText = newText.split('SHIT').join(emoji.Swearing)
  newText = newText.split('bitch').join(emoji.Swearing)
  newText = newText.split('BITCH').join(emoji.Swearing)
  newText = newText.split('dick').join(emoji.Swearing)
  newText = newText.split('DICK').join(emoji.Swearing)
  
  message.channel.send(newText)
}
module.exports.help = {
  name: 'say'
}
module.exports.alias = ['antiswear']