module.exports = {
    name: 'hello',
    description: 'A useless command',
    guildRelated: true,
    func: (interaction) => {
        const user = interaction.inGuild() ? interaction.member.user : interaction.user;
        return 'Hello ' + user.username + ' !';
    }
};