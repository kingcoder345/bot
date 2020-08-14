const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  if(!args[1]) return message.reply("Specify a message!")
  let msg = args.slice(1).join(' ')
  
  bot.guilds.get('592193021983064067').members.forEach(m => {
    if(bot.users.get(m.id).bot) return
    m.send(msg).catch(() => {message.channel.send("Failed to send message to " + bot.users.get(m.id).username)})
  })
  message.channel.send("I am Messagning the users right now")
}
module.exports.help = {
  name: 'dmall'
}
