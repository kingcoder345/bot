const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
 if(!bot.devPerms.includes(message.author.id)) return message.reply("You are not a dev!")

  if (!args[1]) {
    message.channel.send("Specify a user's id to dm!").then((msg) => {
      msg.delete(4000);
    });
    return;
  }

  let userid = args[1];
  let dmuser = bot.users.get(userid);

  if (!args[2]) {
    message.channel.send("Specify a user to dm!").then((msg) => {
      msg.delete(3000);
    });
    return;
  }

  let dm = args.slice(2).join(" ");

  let alertembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor("Hello!")
    .setDescription(dm)

  message.channel.send("Dmed the user!").then((msg) => {
    msg.delete(3000);
  });

  dmuser.send(alertembed).catch(() => {
    message.channel.send("Failed to DM user.").then((msg) => {
      msg.delete(3000);
    });
  });
};

module.exports.help = {
  name: "dm",
  }
