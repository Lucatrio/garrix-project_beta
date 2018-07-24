const Discord = require("discord.js")
const moment = require("moment");
const momentduration = require("moment-duration-format");

module.exports.run = async (client, message, args) => {
function uptime() {
  let msg = 'Uptime: ';
  const totalSeconds = process.uptime();
  const days = Math.floor((totalSeconds % 31536000) / 86400);
  const hours = _.parseInt(totalSeconds / 3600) % 24;
  const minutes = _.parseInt(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);
  message += days >= 1 ? `${days}d ` : '';
  message += hours < 10 ? `0${hours}:` : `${hours}:`;
  message += minutes < 10 ? `0${minutes}:` : `${minutes}:`;
  message += seconds < 10 ? `0${seconds}` : `${seconds}`;
}
    let embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle('> General <')
    .addField(`Guilds `, client.guilds.size)
    .addField(`Users `, client.users.size)
    .addField(`Channels `, client.channels.size)
    .addField(`Uptime `, uptime);

message.channel.send(embed);
}

module.exports.help = {
    name: "stats"
}
