module.exports = (client) => {
    console.info('[INFO] Client is online!');
    console.info(`Login as ${client.user.tag}`);
    console.info('guilds:', new Map(client.guilds.cache.map(g => [g.id, g.name])));
    client.user.setActivity(`Hello,discord.js!`, {
        type: 'PLAYING'
    });
}