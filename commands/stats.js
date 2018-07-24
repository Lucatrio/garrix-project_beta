const Discord = require("discord.js")
const moment = require("moment");
const momentduration = require("moment-duration-format");

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
	let totalSeconds = (client.uptime / 1000);
	let hours = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	let minutes = Math.floor(totalSeconds / 60);
	let seconds = totalSeconds % 60;
	
	let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    .setColor("RED")
    .setTitle('> General <')
    .addField(`Guilds `, client.guilds.size)
    .addField(`Users `, client.users.size)
    .addField(`Channels `, client.channels.size)
    .addField(`Uptime `, uptime)

message.channel.send(embed);
}

module.exports.help = {
    name: "stats"
}
