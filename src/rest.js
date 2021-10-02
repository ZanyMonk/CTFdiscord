const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { getCommands } = require('./commands');

module.exports = {
    refreshSlashCommands (token) {
        // noinspection JSClosureCompilerSyntax,JSCheckFunctionSignatures
        const rest = new REST({
            version: '9'
        }).setToken(token);

        (async () => {
            try {
                console.log('Started refreshing application (/) commands.');

                // @TODO clear previous commands for app and guild
                await rest.put(
                    Routes.applicationCommands('893896245716865066'),
                    { body: getCommands() },
                );

                console.log('Successfully reloaded application (/) commands.');
            } catch (error) {
                console.error(error);
            }
        })();

        return rest;
    }
};