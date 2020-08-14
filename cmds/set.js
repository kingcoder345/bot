const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(message.author !== bot.users.get(bot.developers) && message.author !== bot.users.get("508440119909285937")) {
     //put the ID in quotation marks FIX: 1
     message.channel.send(message.author + " You are not a developer or a premium.!")
     return;
   }
   if(!args[1]) {
     let setcmdEmbed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setFooter("Vertex | Commands can only be used by developers.", process.env.BOT_ICON)
      .setAuthor("Developer Commands", message.author.displayAvatarURL)
      .addField("The `presence` Attribute:", "sets the bot's presence. The possible configurations are **available**, **idle**, **dnd** (do not disturb), and **invisible**. Use `d!set presence [presence]`", false)
      .addField("The `game` Attribute:", "sets the bot's game. You can use `reset` as the gametype to reset it. The other gametypes are **playing**, **streaming**, **listening**, and **watching**. Use `d!set game [gametype] [game]`", false)
      .addField("The `restart` Attribute:", "restarts the bot. Use `d!set reset`", false) 
     message.channel.send(setcmdEmbed);
     return;
   }
  let setSetting = args[1]
  if(setSetting !== "presence" && setSetting !== "game" && setSetting !== "reset") {
    message.channel.send("<:RedTick:553254041304563713> Please specify an **existing** setting to change!") 
    return;
  }
  if(setSetting == "reset"){  
    message.channel.send("Resetting...").then(msg => msg.delete(750));
    bot.destroy().then(bot.login(process.env.TOKEN))
    bot.on('ready', () => {
      console.log(`Bot ${bot.user.username} is on!`);
      let resetembed = new Discord.RichEmbed()
        .setTitle("Vertex was reset by " + message.author.username + "#" + message.author.discriminator)
        .setDescription(" (ID: " + message.author.id + ")" + "\n" + message.author)
        .setColor(16752128)
        .setFooter("Vertex", process.env.BOT_ICON)
        .setTimestamp()
});
    return;
  }
  if(!args[2]) {
    message.channel.send("<:RedTick:553254041304563713> Please specify what to change!")
    return;
  }
  let setString = args[2]
  
  if(setSetting == "presence") {
    if(setString !== "online" && setString !== "idle" && setString !== "dnd" && setString !== "invisible") {
      message.channel.send("<:RedTick:553254041304563713> Please specify a **valid** presence.")
      return;
    }
    let presenceEmoji = ":radio_button:"
    if(setString == "online"){presenceEmoji = "<:OnlineIndicator:553263360226099211>"}
    if(setString == "idle"){presenceEmoji = "<:IdleIndicator:553263360867696650>"}
    if(setString == "dnd"){presenceEmoji = "<:DoNotDisturbIndicator:553263360813301825>"}
    if(setString == "invisible"){presenceEmoji = "<:OfflineIndicator:553263360238682162>"}
    message.channel.send("Changing the bot presence to **" + setString + "**. " + presenceEmoji)
    bot.user.setStatus(setString)
    return;
  }
  if(setSetting == "game") {
    if (setString == "reset") {
      bot.user.setActivity(bot.guilds.size + " servers. | >help", { type: 'WATCHING' });
      message.channel.send("Resetting game. Please wait... <a:LoadingRed:553250647810768949>")
      return;
    }
    if(!args[3]) {
      message.channel.send("<:dnd:588403624519139333> Please specify a game!")
      return;
    }
    let game = args[3]
    game = args.slice(3).join(' ')
    if(setString !== "playing" && setString !== "streaming" && setString !== "listening" && setString !== "watching") {
      message.channel.send("<:dnd:587968411234074637> Please specify a **valid** gametype.")
      return;
    }
    message.channel.send("Changing the game to **" + game + "** with a gametype of *" + setString + "*.")
    if(setString == "playing") {
      bot.user.setActivity(game, { type: 'PLAYING' });
      return;
    }
    if(setString == "streaming") {
      bot.user.setActivity(game, { type: 'STREAMING', url: 'https://twitch.tv/ducksquaddd' });
      return;
    }
    if(setString == "listening") {
      bot.user.setActivity(game, { type: 'LISTENING' });
      return;
    }
    if(setString == "watching") {
      bot.user.setActivity(game, { type: 'WATCHING' });
      return;
    }
  }
}

module.exports.help = {
    name: "set",
    description: "developer commands"
}

// ayyyy

