const Discord = module.require('discord.js');
const emoji = require('./../emojis.json');

module.exports.run = async (bot, message, args) => {
  if(!args[1]){
    message.channel.send("Please tag a user/role/channel!")
    return;
  }
  let membermention = message.mentions.members.first();
  let rolemention = message.mentions.roles.first();
  let channelmention = message.mentions.channels.first();
  if(membermention){
    let memberembed = new Discord.RichEmbed()
    .setColor("#FF9E00")
      .setAuthor("User " + membermention.displayName + "'s ID", membermention.displayAvatarURL, null)
      .setDescription("The user's ID is **" + membermention.id + "**. \n To tag the user, use `<@" + membermention.id + ">`.")
      .setFooter("Quackbot | ID Fetcher: Member", process.env.BOT_ICON)
    message.channel.send(memberembed);
    return;
  }
  if(rolemention){
    let roleembed = new Discord.RichEmbed()
    .setColor("#FF9E00")
      .setAuthor("Role " + rolemention.name + "'s ID", null, null)
      .setDescription("The role's ID is **" + rolemention.id + "**. \n To tag the role, use `<@&" + rolemention.id + ">`.")
      .setFooter("Vertex | ID Fetcher: Role", process.env.BOT_ICON)
    message.channel.send(roleembed);
  }
  if(channelmention){
    let channelembed = new Discord.RichEmbed()
    .setColor("#FF9E00")
      .setAuthor("Channel " + channelmention.name + "'s ID", null, null)
      .setDescription("The channel's ID is **" + channelmention.id + "**. \n To tag the channel, use `<#" + channelmention.id + ">`.")
      .setFooter("Vertex | ID Fetcher: Channel", process.env.BOT_ICON)
    message.channel.send(channelembed);
  }
  
}
module.exports.help = {
  name: 'id'
}
