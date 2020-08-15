/* =========================================
                                                
                        Copyright: Quacc#3559 ;P
                           all rights reserved

                    ========================================= */

/* ============================================================================================================================================================== */

const Discord = require("discord.js");
//const hook = new Discord.WebhookClient('615743243308498945', '_Bp4KqXX42kvGZ1BYBGG9Z37f-dkEki7msa1rEAJ3_F5DcobTl9gdNMQ6feY7NgCwH7o');
const bot = new Discord.Client();
const fs = require("fs");
const db = require("quick.db");
const canvas = require("canvas");
const jimp = require("jimp");
const Util = require("util");

const queue = new Map();

const ytdl = require("ytdl-core");

const gif = require("gif-search");

/* =======================================================================================================================================    */

const config = require("./config.json");
bot.prefix = config.prefix;
bot.developers = config.developers;
bot.vip = config.vipusers;
bot.devPerms = config.devPerms;
bot.banned = config.bannedUsers;
bot.db = db;

/* =======================================================================================================================================    */

function emoji(id) {
  return bot.emojis.get(id).toString();
}

/* =======================================================================================================================================    */

bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
  if (err) throw err;

  let jsFiles = files.filter(f => f.split(".").pop() === "js");

  jsFiles.forEach(f => {
    let props = require(`./cmds/${f}`);
    bot.commands.set(props.help.name, props);
  });
  console.log(`Loaded ${jsFiles.length} commands. THUNDERBIRDS ARE GO!`);
  bot.commandNum = jsFiles.length;
});

/* =======================================================================================================================================    */

fs.readdir("./module/", (err, files) => {
  if (err) throw err;

  let jsFiles = files.filter(f => f.split(".").pop() === "js");

  jsFiles.forEach(f => {
    let props = require(`./module/${f}`);
    bot.commands.set(props.help.name, props);
  });
  console.log(`Loaded ${jsFiles.length} modules. Ducks fuck pigeons!`);
  bot.commandNum = jsFiles.length;
});

/* =======================================================================================================================================    */

fs.readdir("./beta/", (err, files) => {
  if (err) throw err;

  let jsFiles = files.filter(f => f.split(".").pop() === "js");

  jsFiles.forEach(f => {
    let props = require(`./beta/${f}`);
    bot.commands.set(props.help.name, props);
  });
  console.log(`Loaded ${jsFiles.length} beta. beta testers go`);
  bot.commandNum = jsFiles.length;
});

/* =======================================================================================================================================    */

fs.readdir("./eco/", (err, files) => {
  if (err) throw err;

  let jsFiles = files.filter(f => f.split(".").pop() === "js");

  jsFiles.forEach(f => {
    let props = require(`./eco/${f}`);
    bot.commands.set(props.help.name, props);
  });
  console.log(`Loaded ${jsFiles.length} commands. THUNDERBIRDS ARE GO!`);
  bot.commandNum = jsFiles.length;
});

/* =======================================================================================================================================    */

bot.errMsg = message => {
  message.channel.send(
    "Error 404: Please enter command properly. **Syntax Error in command**"
  );
};
bot.permMsg = message => {
  message.channel.send("You do not have permission to do this command");
};

/* =======================================================================================================================================    */

bot.on("ready", () => {
  bot.guild = bot.guilds.get("735878421099446453"); // added bot.guild var
  console.log(`Bot ${bot.user.username} is on! Guild: ${bot.guild.name}`); // added bot guild to log
  //hook.send(readyembed)
  bot.user.setActivity(bot.users.size + " Users | Prefix: !", {
    type: "WATCHING"
  });
  bot.user.setStatus("Online");
});

/* =======================================================================================================================================    */

bot.on("message", async message => {
  if (message.guild) {
    let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || bot.prefix; // changed the way it detects if there isn't a prefix
    // changed it to await instead of .then
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
      let args = message.content
        .substring(prefix.length)
        .trim()
        .split(/ +/g);
      let cmd = bot.commands.get(args[0].toLowerCase());
      if (cmd) cmd.run(bot, message, args);
    }

    /* =======================================================================================================================================    */

    if (message.isMentioned("739935176871903332")) {
      message.channel.send("Your prefix is `" + prefix + "`!"); // changed the message
    }

    /* =======================================================================================================================================    */
  }
  if (message.channel.type === "dm") {
    if (message.author.bot) return;
  }
});

/* =======================================================================================================================================    */


/* =======================================================================================================================================    */



/* =======================================================================================================================================    */

bot.on("disconnect", function(event) {
  console.log("FAILED_TO_CONNECT");
});

/* =======================================================================================================================================    */


/* =======================================================================================================================================    */

bot.login(process.env.TOKEN);
console.log("Vertex activated");

/* =======================================================================================================================================    */
