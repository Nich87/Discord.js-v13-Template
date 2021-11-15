module.exports = async (interaction) => {
    if (interaction.user.bot) return;
    let cmds;
    switch (true) {
        case interaction.isCommand():
            cmds = interaction.commandName;
            break;
        case interaction.isButton():
            cmds = interaction.customId;
            break;
        case interaction.isSelectMenu():
            cmds = interaction.values[0];
            break;
        case interaction.isContextMenu():
            cmds = interaction.commandName;
            break;
    }

    if (!command) {
        if (interaction.isCommand() || interaction.isContextMenu())
            await interaction.reply({
                content: 'Unknown Command! Please try again.',
                ephmeral: true
            });
        return;
    }
    await cmds(interaction);
}