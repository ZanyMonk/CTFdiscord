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

                await rest.put(
                    Routes.applicationGuildCommands('893896245716865066', '893837502148923465'),
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