module.exports.run = async (bot, message, args) => {
  let newmsg = await message.channel.send("Generating avatar...");
  let userr = message.mentions.users.first() || message.author;
  
  await message.channel.send({files: [
    {
      attachment: userr.displayAvatarURL,
      name: "your-profile.png"
    }
  ]});
  
  newmsg.delete();
}

module.exports.help = {
  name: "pfp"
}