const normalizedPath = require('path').join(__dirname, 'commands');
const commands = {};

require('fs').readdirSync(normalizedPath).forEach(function(file) {
    let cmd = require('./commands/' + file);
    commands[cmd.name] = cmd;
});

module.exports = {
    getCommand: (name) => commands[name],
    getCommands: () => Object.values(commands)
};