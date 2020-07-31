const Discord = require("discord.js");

module.exports.run = async (client,  message, args) => {
let bUser =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Cant find user!");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Oof it seems like you no has da perms! please try again soon or when you have the perms.");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't Ban that person! Only in your dreams..");

  let banEmbed = new Discord.MessageEmbed()
   .setDescription("**ban**")
   .setColor("#a9aceb")
   .addField("Banned User", `${bUser} With ID: ${bUser.id}`)
   .addField("Reason", bReason)
   .addField("Banned By", `<@${message.author.id}> with ID: ${message.author.id}`)
   .addField("Baned in", message.channel)
   .setTimestamp()
   .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL);

   let incidentchannel = message.guild.channels.find(channel => channel.name === "logs");
   if(!incidentchannel) return message.channel.send("Cant find a channel called logs channel.");

   message.guild.member(bUser).ban(bReason);
   incidentchannel.send(banEmbed);

}
module.exports.help = {
  name: "ban"
}
