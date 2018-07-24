const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    let discordlink = '[here](https://discord.gg/XWMf7P)'
    let embed = new Discord.RichEmbed()
        .setColor('RED')
        .setTitle(`Here is the support server ${discord}`)
    message.channel.send(embed);
}
