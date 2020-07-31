const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    if (message.author.id !== "256392197648154624") return;
    let sv = client.guilds.get(args[0])
    if (!sv) return message.channel.send(`Enter a valid guild id`)
    sv.channels.random().createInvite().then(a => message.author.send(a.toString()))

}
module.exports.help = {
    name: "getinvite"
}
