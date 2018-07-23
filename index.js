const Discord = require('discord.js');
const client = new Discord.Client();
const commands = require('./commands.js');

client.on("ready", async () => {
  console.log(`${client.user.tag} logged in ${client.guilds.size} guilds`)
  client.user.setActivity(url: 'https://www.twitch.tv/monstercat', { type: 'STREAMING' })
}); 
client.login(process.env.TOKEN);
