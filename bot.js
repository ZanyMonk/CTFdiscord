require('dotenv').config();

const TOKEN = process.env.CTFDISCORD_TOKEN;
const APP_ID = process.env.CTFDISCORD_APP_ID;
const GUILD_ID = process.env.CTFDISCORD_GUILD_ID;

const { Client, Intents, CommandInteraction } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { refreshSlashCommands } = require('./src/rest');
const { getCommand } = require('./src/commands');

refreshSlashCommands(TOKEN, APP_ID, GUILD_ID);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

/**
 * @param {CommandInteraction} interaction
 */
async function interactionCreateListener (interaction) {
    if (!interaction || !interaction.isCommand()) {
        console.log('not a command:', interaction);
        return;
    }

    const cmd = getCommand(interaction.commandName, interaction.inGuild());
    await interaction.reply(cmd.func(interaction));
}

client.on('interactionCreate', interactionCreateListener);

client.login(TOKEN).catch((reason) => {
    console.log('[ERR] - Could not login: ' + reason);
});