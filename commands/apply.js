const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
   
      try {
        if (!args[0]) message.author.send(`Invalid usage do ${prefix}apply <client id>`);
            if (args[0]) message.author.send(`Thank you for applying your application will be reviewed as soon as possible\nIf you put something else then a client id you will be punished`);
            let link = `[like this](https://discordapp.com/oauth2/authorize?client_id=${args[0]}&permissions=3214336&scope=bot)`;
            let embed = new Discord.RichEmbed()
                .setColor("RED")
                .setTitle(`${message.author.username}`)
                .setThumbnail(message.author.displayAvatarURL)
                .setDescription(`${message.author.username}'s bot application ${link}`)
                .setTimestamp()
                .setFooter('Command | Make sure you react after you invite the bot')
        let channel = client.channels.get("470628774996869122");
            channel.send(embed);
      } catch (err) {
        console.log(err);
      }

module.exports.help = {
  name: "apply"
}
