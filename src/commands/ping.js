module.exports = {
    name: 'hello',
    description: 'A useless command',
    func: (interaction) => {
        const user = 'member' in interaction ? interaction.member.user : interaction.user;
        return 'Hello ' + user.username + ' !';
    }
};