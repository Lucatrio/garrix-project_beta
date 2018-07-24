const discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle('> General <')
    .addField(`Guilds `, client.guilds.size)
    .addField(`Users `, client.users.size)
    .addField(`Channels `, client.channels.size)
    .addField(`Uptime `, uptime)

message.channel.send(embed);
}