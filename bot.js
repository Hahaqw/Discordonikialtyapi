const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
if(client.user) {
console.log(Logged in as ${client.user.tag}!);
}
});

client.on('message', async(msg) => {
if (msg.content === 'ping') {
await msg.reply(`Ping: \`${++client.ws.ping}\`ms`);
}
});

client.login(process.env.token)
