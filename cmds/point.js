const Discord = require("discord.js");
const db = require('quick.db');

module.exports.run = async(bot, message, args) => {
  if(message.guild.id !== "592193021983064067") return
  let action = args[1]
  
  let user = message.mentions.members.first()
  if(!user) return message.reply("Who are you changing the points of again?")
  
  let points = await db.fetch(`${user.id}_points`)
  points == Number(points)
  if(!points) points = 0
  
  let newPoints = 0
  
  if(action == "add") {
    db.add(`${user.id}_points`, 1)
    newPoints = await db.fetch(`${user.id}_points`)
    message.channel.send(user + ", you now have " + newPoints + " points!")
  }
  if(action == "subtract") {
    db.subtract(`${user.id}_points`, 1)
    newPoints = await db.fetch(`${user.id}_points`)
    message.channel.send(user + ", you now have " + newPoints + " points!")
  }
  
  if(newPoints == 25 && points == 24) {
    user.addRole('592819935504498701')
    message.channel.send("Added advertising role to user!")
  }
  if(points == 25 && newPoints == 24) {
    user.removeRole('592819935504498701')
    message.channel.send("Removed advertising role from user!")
  }
  
  if(action !== 'add' && action !== 'subtract') return message.reply("That's not a valid action!")
}

module.exports.help = {
  name: "point",
  description: "ping pong smile"
}
