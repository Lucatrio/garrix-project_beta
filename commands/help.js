const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    let sembed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle(`Server commands`)
    .addField(`${prefix}stats`, `Display stat's for ${client.user.toString()}`)
    .addField(`${prefix}info`, `Display information about ${client.user.toString()}`)
    .addField(`${prefix}help`, `Display help information for ${client.user.toString()}`)
    .addField(`${prefix}support`, `Display the link for the ${client.user.toString()} showcase server`)
    .setTimestamp()
    .setFooter(`Command`)

message.channel.send(sembed);
}
