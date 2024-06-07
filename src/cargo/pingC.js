// ping cargo

export default function pingC(interaction) {
if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    interaction.reply({ content: "Pong!" });
  }
}