const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = require("../warnings.json");

let debug = true;


module.exports.run = async (client, message, args) => {

    //!warn @vek <reason>
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("No can do pal!");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if (!wUser) return message.reply("Couldn't find them yo");
    // if (wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("They waaaay too kewl");
    let reason = args.join(" ").slice(22);
  
    if(debug) console.log(warns);

    if (!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
    });

    let warnEmbed = new Discord.MessageEmbed()
        .setDescription("Warns")
        .setAuthor(message.author.username)
        .setColor("#fc6400")
        .addField("Warned User", `<@${wUser.id}>`)
        .addField("Warned In", message.channel)
        .addField("Number of Warnings", warns[wUser.id].warns)
        .addField("Reason", reason);

    let warnchannel = message.guild.channels.resolve("735884313375146106")
    if (!warnchannel) return message.reply("Couldn't find channel");

    warnchannel.send(warnEmbed);

    if (warns[wUser.id].warns % 2 == 0) {
        let muterole = await message.guild.roles.fetch("735884144151887932");
        if (!muterole) return message.reply("You should create that role dude.");

        let mutetime = "10s";
        await (wUser.roles.add(muterole.id));
        message.channel.send(`<@${wUser.id}> has been temporarily muted`);

        setTimeout(function() {
            wUser.roles.remove(muterole.id)
            message.reply(`<@${wUser.id}> has been unmuted.`)
        }, ms(mutetime))
    }
}

module.exports.help = {
    name: "warn"
}
