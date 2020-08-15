const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send("1 second...").then(m => {
    let ping = m.createdTimestamp - message.createdTimestamp;
    let choices = [
      "Is this okay, I'm a bot?",
      "Probably,",
      "I hope it's not bad!",
      "Pong :ping_pong:"
    ];
    let response = choices[Math.floor(Math.random() * choices.length)];

    m.edit(
      `${response}: Bot Latency: ${ping}, API Latency: ${Math.round(bot.ping)}`
    );
  });
};

module.exports.help = {
  name: "ping",
  description: "ping pong smile"
};
