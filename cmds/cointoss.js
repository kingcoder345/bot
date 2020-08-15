const Discord = module.require("discord.js")
module.exports.run = async (bot, message, args) => {
  if (!args[1]) {
}
let answers = ["Tails", "Heads"]
let answer = answers[Math.floor(Math.random() * answers.length)]
let msg = new Discord.RichEmbed()
.setTitle(":money_with_wings:")
.setColor(`RANDOM`)
.addField("Question", args.slice(1).join(" "))
.addField("Answer", answer)
message.channel.send(msg)
}
module.exports.help = {
  name: "cointoss"
}