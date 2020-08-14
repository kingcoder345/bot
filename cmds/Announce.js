const Discord = module.require('discord.js');
const emoji = require('./../emojis.json');

module.exports.run = async (bot, message, args) => {
  if(message.member.hasPermission('MENTION_EVERYONE')) {
    if(!args[1]) {
      let setcmdEmbed = new Discord.RichEmbed()
      .setColor(16752128)
      .setFooter("QuackBot | Announce Command", process.env.BOT_ICON)
      .setAuthor("QuackBot Announcement Info", message.author.displayAvatarURL)
      .addField("**Types**", "The types of announcements are **everyone**, **here**, and **none**.", false)
      .addField("everyone", "This pings the @everyone role.", true)
      .addField("here", "This pings the @here role.", true)
      .addField("none", "This pings no role.", true)
      .addField("**Syntax:**", "`m:!announce [type] [channel] [text]`", false) 
      .addField("**Including Links:**", "You can include links by using `[text](https://your-url.com)`. This will show up as this: [text](https://your-url.com)", false)
      message.channel.send(setcmdEmbed);
      return;
    }
    let type = args[1]
    if(type !== "everyone" && type !== "here" && type !== "none"){
      message.channel.send("Please choose a valid announcement type!")
      return;
    }
    
    let ping = "N/A"
    if(type == "everyone"){ping = "@everyone"}
    if(type == "here"){ping = "@here"}
    if(type == "none"){ping = "N/A"}
    if(type == "sample"){ping = message.author}
    
    let sendingChannel = message.mentions.channels.first();
    if(!sendingChannel){
      message.channel.send("Please mention an existing channel!")
      return;
    }
    
    if(!args[3]){
      message.channel.send("Please specify the description text!")
      return;
    }
    let desc = args.slice(3).join(' ')
    let everyoneEmbed = new Discord.RichEmbed()
    .setColor(16752128)
    .setFooter("Quackbot | @everyone Announcement", process.env.BOT_ICON)
    .setAuthor("Announcement", "https://img.icons8.com/dusk/64/000000/commercial.png")
    .setDescription(desc)
    let hereEmbed = new Discord.RichEmbed()
    .setColor(16752128)
    .setFooter("Quackbot | @here Announcement", process.env.BOT_ICON)
    .setAuthor("Announcement", "https://img.icons8.com/dusk/64/000000/commercial.png")
    .setDescription(desc)
    let noneEmbed = new Discord.RichEmbed()
    .setColor(16752128)
    .setFooter("QuackBot | NoPing™ Announcement", process.env.BOT_ICON)
    .setAuthor("Announcement", "https://img.icons8.com/dusk/64/000000/commercial.png")
    .setDescription(desc)
    
     if (type == "everyone") {
      sendingChannel.send(everyoneEmbed).then(msg => msg.react("👌"));
    }
    if(type == "here"){
      sendingChannel.send(hereEmbed)
      return;
    }
    if (type == "none") {
      sendingChannel.send(noneEmbed).then(msg => msg.react("👌"));
    }
  }else{
    message.channel.send("You do not have the `MENTION_EVERYONE` permission!")
    return;
  }
}

module.exports.help = {
  name: "announce"
}