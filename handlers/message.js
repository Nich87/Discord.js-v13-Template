module.exports = async(message) => {
    if(message.author.bot);
    const sample = require('../commands/message/sample');
    await sample(message);
}