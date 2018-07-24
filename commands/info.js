const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    let biembed = new Discord.RichEmbed()
    .setColor('RED')
    .setTitle(`${client.user.username}`)
    .setImage(client.user.displayAvatarURL)
    .addField('ID', client.user.id)
    .addField('Discriminator', client.user.discriminator)
    .addField('Username', client.user.username)
    .addField('Mention', client.user.toString())

message.channel.send(biembed);
}
