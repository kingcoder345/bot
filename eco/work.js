const Discord = require('discord.js'); //Discord lib
const db = require('quick.db'); //DB lib
var currencyFormatter = require('currency-formatter'); //For currency
var ms = require('parse-ms'); //MS lib

exports.run = async (bot, message, args) => {

  try {
    let cooldown = 1.8e+6; //30 min in ms
    let amount = Math.floor((Math.random() * 100) + 100); // Paid
    let workplace = ["Mail", "Restaurant", "Market", "ICT", "Taxi"] // Places to work
    let workDaily = await db.fetch(`workDaily_${message.author.id}`) // Fetching the time when work is available.
    let result = Math.floor((Math.random() * workplace.length)) /* Random place */
    let timeObj = ms(cooldown - (Date.now() - workDaily)) // Left

    try {

      db.fetch(`balance_${message.author.id}`).then(rm => { // Is balance valid
        if (rm == null || 0 || undefined) {
          db.set(`balance_${message.author.id}`, 50)
        } // Vipe if isn't a valid number
        
        else if (workDaily !== null && cooldown - (Date.now() - workDaily) > 0) { /* If already worked */

          let workDailyEmbed = new Discord.RichEmbed()
            .setAuthor("You can't work right now!", message.author.displayAvatarURL)
            .setColor("#ff0000")
            .setDescription("You just worked for 6 hours!\n**You require rest for __" + timeObj.minutes + " minutes__**")

          message.channel.send(workDailyEmbed);

        } else if (`${result}` == "0") { /* First place */

          db.set(`workDaily_${message.author.id}`, Date.now()); // Now time

          db.add(`balance_${message.author.id}`, amount).then(i => {

            let dailyEmbed = new Discord.RichEmbed()
              .setAuthor(message.author.tag + " has finished working", message.author.displayAvatarURL)
              .setColor("#f4aa42")
              .addField("You've been payed for your shift,", "You got paid **" + currencyFormatter.format(amount, { code: 'USD' }) + "**.")
              .setFooter("Worked at " + workplace[result]);

            message.channel.send(dailyEmbed);

          });

        } else if (`${result}` == "1") { /* Second place */

          db.set(`workDaily_${message.author.id}`, Date.now()); // Now time

          db.add(`balance_${message.author.id}`, amount).then(i => {

            let dailyEmbed = new Discord.RichEmbed()
              .setAuthor(message.author.tag + " has finished working", message.author.displayAvatarURL)
              .setColor("#f4aa42")
              .addField("You've been payed for your shift,", "You got paid **" + currencyFormatter.format(amount, { code: 'USD' }) + "**.")
              .setFooter("Worked at " + workplace[result]);

            message.channel.send(dailyEmbed);
  
          });

        } else if (`${result}` == "2") { /* Third place */

          db.set(`workDaily_${message.author.id}`, Date.now()); // Now time

          db.add(`balance_${message.author.id}`, amount).then(i => {

            let dailyEmbed = new Discord.RichEmbed()
              .setAuthor(message.author.tag + " has finished working", message.author.displayAvatarURL)
              .setColor("#f4aa42")
              .addField("You've been payed for your shift,", "You got paid **" + currencyFormatter.format(amount, { code: 'USD' }) + "**.")
              .setFooter("Worked at " + workplace[result]);

            message.channel.send(dailyEmbed);
            
          });

        } else if (`${result}` == "3") { /* Fourth place */

          db.set(`workDaily_${message.author.id}`, Date.now()); // Now time

          db.add(`balance_${message.author.id}`, amount).then(i => {

            let dailyEmbed = new Discord.RichEmbed()
              .setAuthor(message.author.tag + " has finished working", message.author.displayAvatarURL)
              .setColor("#f4aa42")
              .addField("You've been payed for your shift,", "You got paid **" + currencyFormatter.format(amount, { code: 'USD' }) + "**.")
              .setFooter("Worked at " + workplace[result]);

            message.channel.send(dailyEmbed);

          });

        } else if (`${result}` == "4") { /* Fifth place */

          db.set(`workDaily_${message.author.id}`, Date.now()); // Now time

          db.add(`balance_${message.author.id}`, amount).then(i => {

            let dailyEmbed = new Discord.RichEmbed()
              .setAuthor(message.author.tag + " has finished working", message.author.displayAvatarURL)
              .setColor("#f4aa42")
              .addField("You've been payed for your shift,", "You got paid **" + currencyFormatter.format(amount, { code: 'USD' }) + "**.")
              .setFooter("Worked at " + workplace[result]);

            message.channel.send(dailyEmbed);

          });

        } else {
          message.channel.send({
            embed: {
              "title": "Critical error when trying to get place",
              "color": 0xff2222
            }
          })
        }

      });
    } catch (err) {
      console.log("[ERROR] When working at " + result + "place\n" + err);
    }
  } catch (err) {
    console.log("[ERROR] WORK: \n" + err);
  }
}

module.exports.help = {
  name: "work"
}