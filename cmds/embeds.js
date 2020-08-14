const Discord = require("discord.js")

exports.run = (bot, message, args, ops) => {
  let embed = new Discord.RichEmbed()
  .setTitle("Hello yt here")
  .setColor("#ffea05")
  .setDescription(`**Hello guys are u subed to ducko studios**`)
  .setFooter("Thanks for subing")
  message.channel.send(embed)
}

module.exports.help = {
  name: "yt"
}