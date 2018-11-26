const Discord = require('discord.js');
const client = new Discord.Client();
////////////////////////////////
const hngel1 = ["jF6hyTK"]
const hngel = [`
                             
**حياك الله ياعيني تنورنا
سيرفر روابط سيرفرات ادخل وحط سيرفرك**
https://discord.gg/qvXkBA8

`]
////////////////////////////////
console.log("BOT ONLINE hngel");
 
client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
${hngel}
${hngel1}
. [ ${member}  ]
**`) 
}).catch(console.error)
})
client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
${hngel}
${hngel1}
. [ ${member}  ]
**`) 
}).catch(console.error)
})
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
${hngel}
${hngel1}
 [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
