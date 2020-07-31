const Discord = require("discord.js");

module.exports.run = async (client,  message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
   if(!rUser) return message.channel.send("Could not find user.");
   let reason = args.join(" ").slice(22);

   let reportEmbed = new Discord.MessageEmbed()
   .setDescription("Reports")
   .setColor("#f44242")
   .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
   .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
   .addField("Channel", message.channel)
   .addField("Reason", reason)
   .setTimestamp()
   .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL);

   let reportschannel = message.guild.channels.resolve("735884313375146106");

 message.delete().catch(O_o=>{});
 reportschannel.send(reportEmbed);
 reportschannel.send("<@506956500489601030> <@506956500489601030> someone was reported!");
 // reportschannel.send("<@474993282930180116>,<@422471449622609920> <@335921093179080705> There Has someone been reported.");
message.channel.send("Thanks for reporting!");
}

module.exports.help = {
  name: "report"
}
