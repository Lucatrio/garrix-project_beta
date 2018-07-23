const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const moment = require('moment');
const momentduration = require('moment-duration-format');

client.on("message", async message => {

    let prefix = 'g.';
    let uptime = moment.duration(client.uptime).format('d[ days], h[ hrs], m[ mins, and ]s[ secs]')
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (message.content === prefix + 'stats') {
        let embed = new Discord.RichEmbed()
            .setColor("RED")
            .setTitle('> General <')
            .addField(`Guilds `, client.guilds.size)
            .addField(`Users `, client.users.size)
            .addField(`Channels `, client.channels.size)
            .addField(`Uptime `, uptime)

        message.channel.send(embed);
    }

    if (message.content === prefix + 'info') {
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


    if (message.content === prefix + 'rules') {
        message.channel.send('Please follow these rules if you don\'t you will be punished \n\n1. No racisum nor sexism will be tolerated in this guild \n2. If you want your discord bot in this guild make sure you apply and meet the requirement\'s \n3. If you bot is found posting nsfw content outside of the nsfw channel you and your bot will be punished \n4. Please do not advertise your discord server nor your media platforms if you do so you will be removed \n5. No extra permissions for be accounted for bots please do not ask!');
    }

    if (message.content === prefix + 'help') {
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

        let dembed = new Discord.RichEmbed()
            .setColor("RED")
            .setTitle(`Direct messages command`)
            .addField(`${prefix}apply`, `Display your bot for the ${client.user.toString()} showcase server`)
            .setTimestamp()
            .setFooter(`Command`)

        message.channel.send(dembed);
    }

    if (message.content === prefix + 'support') {
        let discord = '[here](https://discord.gg/XWMf7P)'
        let embed = new Discord.RichEmbed()
            .setColor('RED')
            .setTitle(`Here is the support server ${discord}`)
        message.channel.send(embed);
    }

    if (message.content.startsWith(prefix + "apply")) {
      if(message.channel.type !== 'dm') return;
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
    }

    if (message.content === `${message.mentions.users.has('470684884604813333')}`) {
        message.channel.send(message.author.toString() + ', the prefix is `' + prefix + '`');
    }
});
client.login(process.env.TOKEN);
