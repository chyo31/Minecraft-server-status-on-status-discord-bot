require('dotenv').config();
const token = process.env.TOKEN;
const { Client, MessageEmbed } = require('discord.js');
const util = require('minecraft-server-util');

const bot = new Client();
const serverIP = 'YOUR IP ADDRESS';
const serverPort = 25565;

bot.on('ready', () => {
  console.log('Bot has come online.');

  
  function updateActivity() {
    util.status(serverIP, { port: serverPort })
      .then((response) => {
        const playerCount = response.onlinePlayers;
        const maxPlayers = response.maxPlayers;

        bot.user.setActivity(`Online Players: ${playerCount}/${maxPlayers}`, { type: 'PLAYING' });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  
  updateActivity();

  
  setInterval(updateActivity, 60000);
});

bot.on('message', (message) => {

  
});

bot.login(token);
