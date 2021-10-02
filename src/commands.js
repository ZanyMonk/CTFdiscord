const normalizedPath = require('path').join(__dirname, 'commands');
const appCommands = {};
const guildCommands = {};

function addCommand(command) {
    return (command.guild ? guildCommands : appCommands)[command.name] = command;
}

require('fs').readdirSync(normalizedPath).forEach(function(file) {
    let commands = require('./commands/' + file);
    (Array.isArray(commands) ? commands : [commands]).forEach(addCommand);
});

module.exports = {
    getCommand: (name, inGuild) => {
        return inGuild && name in guildCommands ? guildCommands[name] : appCommands[name];
    },
    getAppCommand: (name) => appCommands[name],
    getGuildCommand: (name) => guildCommands[name],
    getAppCommands: () => Object.values(appCommands),
    getGuildCommands: () => Object.values(guildCommands),
};