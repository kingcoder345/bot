const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
  let serverEdit = await bot.db.fetch(`serverEdit_${message.guild.id}`);
  if (!serverEdit)
    return message.channel.send(
      "You do not have the serverEdit module enabled!"
    );
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.reply("You do not have `MANAGE_ROLES` permission!");
  let g = message.guild;
  let roles = [
    { name: "Black", color: "#020202" },
    { name: "Blue", color: "#4363d8" },
    { name: "Brown", color: "#9A6324" },
    { name: "Cyan", color: "#42d4f4" },
    { name: "Green", color: "#3cb44b" },
    { name: "Grey", color: "#a9a9a9" },
    { name: "Lavender", color: "#e6beff" },
    { name: "Lime", color: "#bfef45" },
    { name: "Magenta", color: "#f032e6" },
    { name: "Maroon", color: "#800000" },
    { name: "Mint", color: "#aaffc3" },
    { name: "Navy", color: "#000075" },
    { name: "Olive", color: "#808000" },
    { name: "Orange", color: "#f58231" },
    { name: "Pink", color: "#fabebe" },
    { name: "Purple", color: "#911eb4" },
    { name: "Red", color: "#e6194B" },
    { name: "Teal", color: "#469990" },
    { name: "White", color: "#ffffff" },
    { name: "Yellow", color: "#ffe119" }
  ];
  let names = [];
  roles.forEach(r => {
    names.push(r.name);
  });
  await message.channel.send(
    "Are you sure you would like to continue? This process will create the following " +
      roles.length +
      " roles: \n**" +
      names.join("**, **") +
      "**\nRespond `continue` to continue. Otherwise, respond `cancel`."
  );

  let canceled = false;

  bot.on("message", async msg => {
    if (msg.channel.id !== message.channel.id) return;
    if (msg.author.id !== message.author.id) return;
    if (msg.content == "cancel" && !canceled) {
      canceled = true;
      message.channel.send("Canceled!");
    }
    if (msg.content == "continue" && !canceled) {
      canceled = true;
      message.channel.send("Creating the roles!");
      const log = await g.createChannel("log", { type: "text" });

      await log.send(
        "Thank you for using The Quack Bot's server builder you may wanna add permission so people cant look into here. This process may take a while."
      );
      let statusMessage = await log.send(
        "**Status:** Working <a:LoadingGears:586715642653048835>"
      );

      try {
        async function role(name, color) {
          let _ = await g.createRole({ name: name, color: color });
          log.send("Created role **" + _ + "**");
          return _;
        }

        //await role('', '')

        await roles.forEach(async r => {
          await role(r.name, r.color);
          if (roles.indexOf(r) == roles.length - 1) {
            await log.send("Done!");
            await statusMessage.edit(
              "**Status:** Success <:GreenTick:553254041598033930>"
            );
          }
        });
      } catch (e) {
        statusMessage.edit("**Status:** Error <:RedTick:553254041304563713>");
        if (e) log.send("**Error:** \n" + e);
        if (!e)
          log.send(
            "Severe error occoured. Please check the bot's permissions!"
          );
        canceled = true;
      }
    }
  });
};
module.exports.help = {
  name: "colors",
  description: "Make some color roles for your server.",
  usage: "colors"
};
