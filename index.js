const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('over     ', { type: 'WATCHING'}).catch(console.error);
});




const prefix = '!';

var verion = '1.2';



client.once('ready', () => {
    console.log('Bot is on!')
})
module.exports.timedCheck = undefined;
module.exports.cal = 0;




client.on('message', message => {
    if (message.content === '!ping'){
        message.reply('pong!')
    }
})



client.login(config.token);
