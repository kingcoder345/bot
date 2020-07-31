const Discord = require("discord.js");

module.exports.run = async (client,  message, args) => {
   const bicon =  client.user.displayAvatarURL;
   const botembed = new Discord.MessageEmbed()
   .setDescription(" client Information")
   .setColor("#42f49e")
   .setThumbnail(bicon)
   .addField(" bot Name",  client.user.username)
   .addField("Created On", client.user.createdAt);
   // .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL);
    return message.channel.send(botembed);

}
module.exports.help = {
  name: "botinfo"
}
