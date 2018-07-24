const Discord = require("discord.js")
const moment = require("moment");
const momentduration = require("moment-duration-format");

module.exports.run = async (client, message, args) => {
  
    let embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle('> General <')
    .addField(`Guilds `, client.guilds.size)
    .addField(`Users `, client.users.size)
    .addField(`Channels `, client.channels.size)

message.channel.send(embed);
}

module.exports.help = {
    name: "stats"
}
