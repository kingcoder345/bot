const Discord = module.require('discord.js');
const emoji = require('./../emojis.json');
const db = require('quick.db');
const STO = emoji.Stone;
const BLK = emoji.Blank;
const END = emoji.Door;
const CHR = emoji.Ken;
const GRA = emoji.Grass;
const DRT = emoji.Dirt;


module.exports.run = async (bot, message, args) => {
  let sword = await db.fetch(`itemSwords_${message.author.id}`)
  sword = Number(sword)
  if(!(sword >= 1)) return message.reply("You don't have a sword! Buy one in the shop")
  
let page = 1

let LV1layout = [
           STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + STO + BLK + BLK + BLK
  + '\n' + CHR + BLK + BLK + STO + STO + STO + BLK + END
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n**OBJECTIVE: Get to the door**',
  
           STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + STO + BLK + BLK + BLK
  + '\n' + BLK + CHR + BLK + STO + STO + STO + BLK + END
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n**OBJECTIVE: Get to the door**',
  
           STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + STO + BLK + BLK + BLK
  + '\n' + BLK + BLK + CHR + STO + STO + STO + BLK + END
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n**OBJECTIVE: Get to the door**',
  
           STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + CHR + STO + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + STO + STO + STO + BLK + END
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n**OBJECTIVE: Get to the door**',
  
           STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + CHR + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + STO + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + STO + STO + STO + BLK + END
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n**OBJECTIVE: Get to the door**',
  
           STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + STO + CHR + BLK + BLK
  + '\n' + BLK + BLK + BLK + STO + STO + STO + BLK + END
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n**OBJECTIVE: Get to the door**',
  
           STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + STO + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + STO + STO + STO + CHR + END
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n**OBJECTIVE: Get to the door**'
];
  
  
let LV2layout = [
           GRA + GRA + GRA + GRA + GRA + GRA + GRA + GRA
  + '\n' + DRT + DRT + DRT + DRT + DRT + DRT + DRT + DRT
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + STO + BLK
  + '\n' + CHR + BLK + BLK + STO + STO + STO + STO + END
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n**OBJECTIVE: Get to the door** \nThis level was made by **Ducksquad#3597**',
  
           GRA + GRA + GRA + GRA + GRA + GRA + GRA + GRA
  + '\n' + DRT + DRT + DRT + DRT + DRT + DRT + DRT + DRT
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + STO + BLK
  + '\n' + BLK + CHR + BLK + STO + STO + STO + STO + END
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n**OBJECTIVE: Get to the door** \nThis level was made by **Ducksquad#3597**',
  
           GRA + GRA + GRA + GRA + GRA + GRA + GRA + GRA
  + '\n' + DRT + DRT + DRT + DRT + DRT + DRT + DRT + DRT
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + STO + BLK
  + '\n' + BLK + BLK + CHR + STO + STO + STO + STO + END
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n**OBJECTIVE: Get to the door** \nThis level was made by **Ducksquad#3597**',
  
           GRA + GRA + GRA + GRA + GRA + GRA + GRA + GRA
  + '\n' + DRT + DRT + DRT + DRT + DRT + DRT + DRT + DRT
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + CHR + BLK + BLK + STO + BLK
  + '\n' + BLK + BLK + BLK + STO + STO + STO + STO + END
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n**OBJECTIVE: Get to the door** \nThis level was made by **Ducksquad#3597**',
  
           GRA + GRA + GRA + GRA + GRA + GRA + GRA + GRA
  + '\n' + DRT + DRT + DRT + DRT + DRT + DRT + DRT + DRT
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + CHR + BLK + STO + BLK
  + '\n' + BLK + BLK + BLK + STO + STO + STO + STO + END
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n**OBJECTIVE: Get to the door** \nThis level was made by **Ducksquad#3597**',
  
           GRA + GRA + GRA + GRA + GRA + GRA + GRA + GRA
  + '\n' + DRT + DRT + DRT + DRT + DRT + DRT + DRT + DRT
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + CHR + STO + BLK
  + '\n' + BLK + BLK + BLK + STO + STO + STO + STO + END
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n**OBJECTIVE: Get to the door** \nThis level was made by **Ducksquad#3597**',
  
           GRA + GRA + GRA + GRA + GRA + GRA + GRA + GRA
  + '\n' + DRT + DRT + DRT + DRT + DRT + DRT + DRT + DRT
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n' + STO + STO + BLK + BLK + BLK + BLK + BLK + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + CHR + BLK
  + '\n' + BLK + BLK + BLK + BLK + BLK + BLK + STO + BLK
  + '\n' + BLK + BLK + BLK + STO + STO + STO + STO + END
  + '\n' + STO + STO + STO + STO + STO + STO + STO + STO
  + '\n**OBJECTIVE: Get to the door** \nThis level was made by **Ducksquad#3597**'
];
  
  if(!args[1]) return message.reply("Specify what dungeon are you going into?")
  let level = Number(args[1])
  if(level > 2 || level < 1) return message.reply("Wrong level!")
  if(level == 1) {
    message.channel.send(LV1layout[0]).then(msg => {

    msg.react('⬅').then(() =>
    msg.react('➡'))

    // Filters
    const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
    const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

    const backwards = msg.createReactionCollector(backwardsFilter, {timer: 6000});
    const forwards = msg.createReactionCollector(forwardsFilter, {timer: 6000});

    backwards.on('collect', r => {
      r.remove(r.users.filter(u => u === message.author).first());
        if (page === 1) return;
        page--;
       msg.edit(LV1layout[page-1])
    })

    forwards.on('collect', r => {
      r.remove(r.users.filter(u => u === message.author).first());
        if(page == LV1layout.length) {
          msg.clearReactions()
          msg.edit("You did it! You earned **$100**!")
          let currentlevel = db.fetch(`dungeonLevel_${message.author.id}`)
          currentlevel = Number(currentlevel)
          db.add(`balance_${message.author.id}`, 100)
          if(currentlevel < 1) db.add(`dungeonLevel_${message.author.id}`, 1)
          if(!currentlevel) db.add(`dungeonLevel_${message.author.id}`, 1)
          return
        }
        page++;
       msg.edit(LV1layout[page-1])
    })
    })    
  }
  
  
  if(level == 2) {
  message.channel.send(LV2layout[0]).then(msg => {

  msg.react('⬅').then(() =>
  msg.react('➡'))

  // Filters
  const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
  const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

  const backwards = msg.createReactionCollector(backwardsFilter, {timer: 6000});
  const forwards = msg.createReactionCollector(forwardsFilter, {timer: 6000});

  backwards.on('collect', r => {
    r.remove(r.users.filter(u => u === message.author).first());
      if (page === 1) return;
      page--;
     msg.edit(LV2layout[page-1])
  })

  forwards.on('collect', r => {
    r.remove(r.users.filter(u => u === message.author).first());
      if(page == LV2layout.length) {
        msg.clearReactions()
        msg.edit("You did it! You earned **$250**!")
        let currentlevel = db.fetch(`dungeonLevel_${message.author.id}`)
        currentlevel = Number(currentlevel)
        db.add(`balance_${message.author.id}`, 250)
        if(currentlevel == 1) db.add(`dungeonLevel_${message.author.id}`, 1)
        if(!currentlevel) db.add(`dungeonLevel_${message.author.id}`, 1)
        return
      }
      page++;
     msg.edit(LV2layout[page-1])
  })
  })    
}
  
}

module.exports.help = {
  name: 'dungeon'
}
