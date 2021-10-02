const { ApplicationCommandOptionTypes } = require('discord.js').Constants;

function normalizeURL (url) {
    try {
        return (new URL(url)).toString();
    } catch {
        return false;
    }
}

/**
 * Will contain notifications and announcements
 */
const sessions = {
    'https://ctf.duc.ul/': {}
};

module.exports = [
    {
        name: 'sessions',
        guild: true,
        description: 'List sessions',
        func: (interaction) => {
            let text = '';

            for (const url in sessions) {
                const session = sessions[url];
                text += '**' + url + '**\n';
            }

            return text;
        }
    },
    {
        name: 'session',
        guild: true,
        description: 'Create a new session',
        options: [
            {
                type: ApplicationCommandOptionTypes.STRING,
                name: 'url',
                description: 'URL of the CTFd instance',
                required: true
            }
        ],
        func: (interaction) => {
            const url = normalizeURL(interaction.options.data.filter((o) => o.name === 'url')[0]);

            // @TODO check CTFd API
            if (!url) {
                return 'Could not connect to CTFd instance.';
            }

            if (url in sessions) {
                return 'Session for this CTF already exists.';
            }

            sessions[url] = {};
            return 'Session created for "' + url + '".';
        }
    }
];