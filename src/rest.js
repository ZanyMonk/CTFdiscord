const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { getAppCommands, getGuildCommands } = require('./commands');

module.exports = {
    refreshSlashCommands (token, appId, guildId) {
        // noinspection JSClosureCompilerSyntax,JSCheckFunctionSignatures
        const rest = new REST({
            version: '9'
        }).setToken(token);

        (async () => {
            try {
                console.log('Started refreshing application (/) commands.');

                await rest.put(Routes.applicationCommands(appId), {
                    body: getAppCommands()
                }).then((res) => {
                    console.log('App commands:', res);
                });

                await rest.put(Routes.applicationGuildCommands(appId, guildId), {
                    body: getGuildCommands()
                }).then((res) => {
                    console.log('Guild commands:', res);
                });

                console.log('Successfully reloaded application (/) commands.');
            } catch (error) {
                console.error(error);
            }
        })();

        return rest;
    }
};