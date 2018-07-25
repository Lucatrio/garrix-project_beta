const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const moment = require('moment');
const momentduration = require('moment-duration-format');
client.on("ready", ready => {
    console.log("Ready..")
        client.user.setPresence({
        game: {
            name: 'the queue',
            type: "WATCHING",
            url: "https://www.twitch.tv/monstercat"
        }
    });
});
client.on("message", message => {
    let prefix = "g.";
    if (message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
      let commandFile = require(`./commands/${command}.js`);
      console.log(`${command} loaded`);
      commandFile.run(client, message, args);
    } catch (err) {
      message.channel.send(`${message.author.toString()}, sorry that is not a command`);
    }
  });
  
client.login(process.env.TOKEN);
