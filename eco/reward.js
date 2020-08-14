const Discord = require('discord.js'); //Discord lib
const db = require('quick.db'); //DB lib
var ms = require('parse-ms'); //MS lib

exports.run = async (client, message, args) => {
  let Rpass = await db.fetch(`hasRewardPass_${message.member.id}`);
  if(Rpass = null || Rpass == undefined || Rpass !== "true") return message.reply("You do not own a reward pass!")
  
  let cooldown = 1.08e+7,
      amount = (Math.floor(Math.random() * 351) + 450);
  let log = client.channels.get('594247303502495744') // Logging channel
  
  try {
    db.fetch(`lastReward_${message.author.id}`).then(lastReward => {
      db.fetch(`balance_${message.member.id}`).then(m => {
        if (m == null) {
          db.set(`balance_${message.member.id}`, 50);
        } else if (lastReward !== null && cooldown - (Date.now() - lastReward) > 0) {
          
          let timeObj = ms(cooldown - (Date.now() - lastReward));
          
          let lastRewardEmbed = new Discord.RichEmbed()
          .setAuthor("Denied")
          .setColor('#ff2222')
          .setDescription(`You need to wait before collecting your reward again. \nTime Left: **${timeObj.hours}:${timeObj.minutes}**!`)
          .setFooter('Used by ' + message.author.tag, message.author.avatarURL);
          
          let dailyCooldown = new Discord.RichEmbed()
          .setAuthor("Denied")
          .setColor('#ff2222')
          .setDescription(`Used daily before cooldown.\nTime Left: **${timeObj.hours}:${timeObj.minutes}**!`)
          .setFooter('Used by ' + message.author.tag, message.author.avatarURL);
          
          message.channel.send(lastRewardEmbed);
          log.send(dailyCooldown)
        } else {
          
          db.set(`lastReward_${message.author.id}`, Date.now());
          db.add(`balance_${message.member.id}`, amount).then(i => {
            
            var embed = new Discord.RichEmbed()
            .setTitle('Reward')
            .setDescription(`Sucessfully collected **$${amount}**`)
            .setColor('#ffffff')
            .setFooter('Used by ' + message.author.tag, message.author.avatarURL)
            
            message.channel.send(embed);
            
            let dailyGot = new Discord.RichEmbed()
            .setAuthor("Success")
            .setColor('#22ff22')
            .setDescription("Successfuly got reward")
            .setFooter('Used by ' + message.author.tag, message.author.avatarURL);
            log.message.send(dailyGot)
          });
        }
      });
    });
  } catch (err) {
    console.log("[ERROR] When using DAILY - \n" + err)
  }
  
}

module.exports.help = {
  name: 'reward'
}