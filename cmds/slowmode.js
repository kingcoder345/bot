const Discord = module.require('discord.js');
const emoji = require('./../emojis.json');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
  if(!message.author.hasPermission('MANAGE_MESSAGES')) return message.channel.send("You must have the `MANAGE_MESSAGES` permission!")
  if(!args[1]) return message.channel.send("Spefify the length of slowmode!")
  let time = ms(args[1])
  let time2 = Math.floor(time / 1000)
  if(time2 > 21600 || time2 < 0) return message.channel.send("Time must be between 0 and 6h!")
  message.channel.setRateLimitPerUser(time2)
  .catch(() => {
    message.channel.send("Failed to set slowmode in this channel, check your slowmode length.")
  })
  message.channel.send("I have set the slowmode in this channel to " + ms(time, {long: true}) + "!")
}
module.exports.help = {
  name: 'slowmode'
}
