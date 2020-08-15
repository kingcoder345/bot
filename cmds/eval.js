const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!bot.devPerms.includes(message.author.id)) return;

  let func = args.slice(1).join(" ");
  /* determine the function */
  let evl = "FATAL_ERROR";
  /* define evl variable */
  
  function refresh() {
    require('child_process').execSync('refresh', { encoding: 'utf-8' })
    console.log("FRESH")
  }

  try {
    evl = eval(func);
    /* evaluate the code */
  } catch (e) {
    evl = e;
    /* catch any errors */
  }

  message.channel.send(
    "**Input:**```js\n" + func + "\n```**Output:**```\n" + evl + "\n```"
  );
  /* send an output */
};
module.exports.help = {
  name: "eval",
 
};
