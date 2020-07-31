const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

message.channel.send("Check Dms")

    let verify = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Thank you for Trying to verify")
        .addField("Please check your direct messages to learn how to verify")
        .addField('===========')
        .setTimestamp(new Date())
        .setFooter(`requested by ${message.author.tag}`);


    return message.author.send(verify);

};

module.exports.help = {
    name: "verify",
};
