const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const rolled = Math.floor(Math.random() * 2) + 1;
  let headembed = new Discord.MessageEmbed()
  .setAuthor(`Coin Flip`)
  .addField(`Result`, `You flipped a: **Heads**!`)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setColor("RANDOM");
  let tailembed = new Discord.MessageEmbed()
  .setAuthor(`Coin Flip`)
  .addField(`Result`, `You flipped a: **Tails**!`)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setColor("RANDOM");
  if (rolled == "1")
  {
    message.channel.send(tailembed);
  }
  if (rolled == "2")
  {
    message.channel.send(headembed);
  }
}

module.exports.help = {
  name: "coinflip"
}
