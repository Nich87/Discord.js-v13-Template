const { Client, Intents } = require('discord.js');
const client = new Client({
  intents: Object.keys(Intents.FLAGS),
  partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER'],
  restTimeOffset: 100
});

const handlers = require('../handlers');
require('dotenv').config();

client.once('ready', () => {
  handlers.ready(client);
});

client.on('messageCreate', async (message) => {
  try {
    await handlers.message(message);
  } catch (err) {
    console.error(err);
  }
});

client.on('interactionCreate', async (interaction) => {
  try {
    await handlers.interaction(interaction);
  } catch (err) {
    console.error(err);
  }
});

client.login(process.env.token);
