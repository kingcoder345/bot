const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("You need **KICK_MEMBERS** permissions for use this command.")
    const modlog = message.guild.channels.resolve("735884313375146106")
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("Couldn't find user.")
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!user.roles.cache.find(role => role.name === "Muted🔇")) return message.channel.send('There are\'t in muted.')
    if (!reason) return message.channel.send('lease specify a reason for the mute!')
    let muterole = message.guild.roles.cache.find((role) => role.name === "Muted🔇");
    if(args[0] == "help"){
      message.reply("Usage: ==unmute <user> <reason>");
      return;
    }
  let muteChannel = message.guild.channels.find(`name`, "logs");
  if (!muteChannel) return message.channel.send('**Please create a channel with the name `logs`**')

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted🔇",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions([
                {
                  id: muterole.id,
                  deny: ["SEND_MESSAGES"]
                }]);
            });
        } catch (e) {
            console.log(e.stack);
        }
    }


    let mutetime = args[1];

    await (user.removeRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' Action | UnMute', `https://images-ext-2.discordapp.net/external/wKCsnOcnlBoNk-__BXsd6BrO6YddfUB-MtmaoaMxeHc/https/lh3.googleusercontent.com/Z5yhBQBJTSJVe5veJgaK-9p29hXm7Kv8LKF2oN0hDnsToj4wTcQbirR94XVpH4Lt5a5d%3Dw300`)
            .addField('User', `<@${user.id}>`)
            .addField('Reason', `${reason}`)
            .addField('Moderator', `${mod}`)
            .setColor('#00FF80')
      		  .setFooter("Bot Version 1.1.0", "https://cdn.discordapp.com/avatars/453870812311584779/72734a7ab1876a3d63e565e70f378fc2.png?size=2048")
        modlog.send(muteembed)


}


exports.conf = {
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name: "unmute",
    category: "MODERATION"
}
