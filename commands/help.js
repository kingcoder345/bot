const Discord = require("discord.js");
const config = require("../config.json");

// module.exports.run = async (client, message, args) => {
module.exports.run = (client, message, args) => {

  message.channel.send("Check private messages to see the help message! ")

      let gagi = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Community commands!")
          .addField("hug", 'Hugs the mentioned user!')
          .addField('servers', 'Shows you server list')
          .addField('ping', 'shows you the ping of the bot')
          .addField('stats', 'shows you the most information about the bot')
          .addField('report', 'reports the mentioned user')
          .addField('roleinfo', 'gives u information about a role')
          .addField('serverinfo', 'gives u information about the server')
          .addField('botinfo', 'gives u short version about the bot')
          .addField('coinflip', 'either head or tail')
          .addField("remind", 'reminds you of the dedicated time you put it on')
          .addField('candy', 'gives the mentioned user candy :D')
          .addField('servers', 'Gives you the list of servers the bot is in :D')
          .addField('meme', 'I think it says what it does. well if you dont know it will give you a random meme')
          .setTimestamp(new Date())
          .setFooter(`requested by ${message.author.tag}`);


          let gagi2 = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setTitle('Moderator Commands!')
          .addField('Warn', 'Warns the mentioned user!')
          .addField('Mute', 'Mutes the mentioned user!')
          .addField('Kick', 'Kicks the mentioned user!')
          .addField('unmute', 'Unmutes the mentioned user!')
          .addField('lockdown', 'locks down the channel used in format: lockdown seconds,minutes,hours')
          .addField('Say', 'Use this for announcements :D Only Moderators,Administrator,Owner/Creator use this command')
          .setFooter(`requested by ${message.author.tag}`);


          let gagi22 = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setTitle('Music Commands')
          .addField('Play', 'Plays The Specific URL (Broken atm working on a fix)')
          .addField('Thanks', "More to come soon")
          .setFooter(`requested by ${message.author.tag}`);


            message.author.send(gagi);
            message.author.send(gagi22);
            message.author.send(gagi2);
            // client.channel.get("480439804501164044").send("Test")

}

// module.exports.help = {
//     name: "help"
// }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'help',
    description: '',
    usage: 'help'
  };
  
