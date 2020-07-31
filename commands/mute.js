heconst Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("You need **KICK_MEMBERS** permissions for use this command.")
    const modlog = message.guild.channels.find(channel => channel.name === 'logs');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("Couldn't find user.")
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) return message.channel.send('lease specify a reason for the mute!')
    let muterole = message.guild.roles.fetch("735884144151887932");
    if(args[0] == "help"){
      message.reply("Usage: ==mute <user> <reason>");
      return;
    }
  message.guild.channels.fetch("735884313375146106").then((channel) => {
    if (!channel) return message.channel.send('**Please create a channel with the name `logs`**')
  if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted🔇",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];

    await (user.addRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' Action | Mute', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
            .addField('User', `<@${user.id}>`)
            .addField('Reason', `${reason}`)
            .addField('Moderator', `${mod}`)
            .setColor('#D9D900')
        modlog.send(muteembed)
  
  })


}


exports.conf = {
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name: "mute",
    category: "MODERATION",
}
