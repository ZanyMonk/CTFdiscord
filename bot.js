require('dotenv').config();

const TOKEN = process.env.CTFDISCORD_TOKEN;
const { Client, Intents, CommandInteraction } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { refreshSlashCommands } = require('./src/rest');
const { getCommand } = require('./src/commands');

refreshSlashCommands(TOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

/**
 * @param {CommandInteraction} interaction
 */
async function interactionCreateListener (interaction) {
    if (!interaction.isCommand()) return;

    const cmd = getCommand(interaction.commandName);
    await interaction.reply(cmd.func(interaction));
}

client.on('interactionCreate', interactionCreateListener);

client.login(TOKEN).catch((reason) => {
    console.log('[ERR] - Could not login: ' + reason);
});