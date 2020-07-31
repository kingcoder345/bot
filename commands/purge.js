const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
  if (!message.member.hasPermission("KICK_MEMBERS")) { // This checks to see if they DONT have it, the "!" inverts the true/false
      message.channel.send('You need the \`KICK_MEMBERS\` permission to use this command.'); // This tells the user in chat that they need the role.
      return; // this returns the code, so the rest doesn't run.
  }
  
  const amount = parseInt(args[0]);
    
  // We want to check if the argument is a number
  if (isNaN(amount)) {
      // Sends a message to the channel.
      message.channel.send('Please use a number as your arguments. \n Usage:  >purge <amount>'); //\n means new line.
      // Cancels out of the script, so the rest doesn't run.
      return;
  }
  
  if(amount < 2 || amount > 100) {
    return message.channel.send("Please specify an amount between 2 and 100");
  }
  const fetched = message.channel.messages.fetch({limit: args[0]}).then((messages) => {
    message.channel.bulkDelete(messages)
        .catch(error => message.channel.send(`Error: ${error}`));
  }) // This grabs the last number(args) of messages in the channel.
   // If it finds an error, it posts it into the channel.
}