// basic cargo

export default function basicC(interaction) {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "basic") {
    if (interaction.options.getSubcommand() === "sum") {
      const a = interaction.options.getNumber("a");
      const b = interaction.options.getNumber("b");
      const c = a + b;
      interaction.reply({ content: `${a} + ${b} = ${c}` });
    }

    if (interaction.options.getSubcommand() === "difference") {
      const a = interaction.options.getNumber("a");
      const b = interaction.options.getNumber("b");
      const c = a - b;
      interaction.reply({ content: `${a} - ${b} = ${c}` });
    }

    if (interaction.options.getSubcommand() === "product") {
      const a = interaction.options.getNumber("a");
      const b = interaction.options.getNumber("b");
      const c = a * b;
      interaction.reply({ content: `${a} * ${b} = ${c}` });
    }

    if (interaction.options.getSubcommand() === "quotient") {
      const a = interaction.options.getNumber("a");
      const b = interaction.options.getNumber("b");
      const c = a / b;
      interaction.reply({ content: `${a} / ${b} = ${c}` });
    }
  }
}
