// calculate cargo

export default function calculateC(interaction) {
  if (interaction.commandName === "calculate") {
    const input = interaction.options.getString("input");
    const output = eval(input);
    interaction.reply({ content: `${input} = ${output}` });
  }
}
