const emoji = require("./../emojis.json");
const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {
  var embedColor = "#ffffff";

  var missingPermissionsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the user is missing permissions
    .setColor(embedColor)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle("Insufficient Permissions!")
    .setDescription(
      "You need the `MANAGE_MESSAGES` permission to use this command!"
    )
    .setTimestamp();
  var missingArgsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the command isnt run right
    .setColor(embedColor)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle("Missing Arguments!")
    .setDescription("Usage: `warn [@User] [Reason]")
    .setTimestamp();
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(missingPermissionsEmbed); // Checks if the user has the permission
  let mentioned = message.mentions.users.first(); // Gets the user mentioned!
  if (!mentioned) return message.channel.send(missingArgsEmbed); // Triggers if the user donsn't tag a user in the message
  let reason = args.slice(2).join(" "); // .slice(1) removes the user mention, .join(' ') joins all the words in the message, instead of just sending 1 word
  if (!reason) return message.channe.send(missingArgsEmbed); // Triggers if the user dosn't provide a reason for the warning

  db.fetch(`${mentioned.id}_warnCount_${message.guild.id}`).then(warnCount => {
    warnCountwarnCount = Number(warnCount);

    if (!warnCount) warnCount = 0;

    let warnCountd = warnCount + 1;

    var warningEmbed = new Discord.RichEmbed() // Creates the embed that's DM'ed to the user when their warned!
      .setColor("#c95764")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle(
        `You've been warned in ${message.guild.name}. You now have ${warnCountd} warns!`
      )
      .addField("Warned by", message.author.tag)
      .addField("Reason", reason)
      .setTimestamp();
    mentioned.send(warningEmbed); // DMs the user the above embed!
    var warnSuccessfulEmbed = new Discord.RichEmbed() // Creates the embed thats returned to the person warning if its sent.
      .setColor("#00FF00")
      .setTitle(
        "User Has Been Successfully Warned! They now have " +
          warnCountd +
          " warns."
      );
    message.channel.send(warnSuccessfulEmbed); // Sends the warn successful embed
    message.delete(); // Deletes the command
    if (warnCount == 0)
      db.set(`${mentioned.id}_warnCount_${message.guild.id}`, 1);
    if (warnCount > 0)
      db.add(`${mentioned.id}_warnCount_${message.guild.id}`, 1);
  });
};
module.exports.help = {
  name: "warn"
};
