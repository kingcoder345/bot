const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
 let serverembed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .addField("Server Roles",` ${message.guild.roles.cache.size} Roles  \n Names : ${message.guild.roles.cache.array()}`,true)
    .setTimestamp()
    .setFooter(`${message.author.username}#${message.author.discriminator}`,message.author.displayAvatarURL());

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"roles"
}
