module.exports = (message) => {
    message.channel.send(`Ping:${message.client.ws.ping}ms`);
}