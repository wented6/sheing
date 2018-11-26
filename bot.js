const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ""// البرفكس هنا

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('By Wenteed')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')

  
  


});
 
const Discord = require('discord.js');
const client = new Discord.Client();
////////////////////////////////
const hngel1 = ["452416139725635604"]
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
