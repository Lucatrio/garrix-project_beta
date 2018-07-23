const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", async () => {
  console.log(`${client.user.tag} logged in ${client.guilds.size} guilds`)
  client.user.setActivity('the queue', { type: 'WATCHING' })
}); 
client.login(process.env.TOKEN);
