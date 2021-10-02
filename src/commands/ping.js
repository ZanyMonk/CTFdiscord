module.exports = {
    name: 'hello',
    description: 'A useless command',
    func: (interaction) => {
        return 'Hello ' + interaction.member.user.username + ' !';
    }
};