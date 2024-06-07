// pythagorean theorem cargo

export default function pythagorean_theoremC(interaction) {
  if (interaction.commandName === "pythagorean") {
    if (interaction.options.getSubcommand() === "leg") {
      const b = interaction.options.getNumber("leg");
      const c = interaction.options.getNumber("hypotenuse");
      const a = c ** 2 - b ** 2;
      interaction.reply({
        content: `c = ${c} \nb = ${b} \n\na = ${c}^2 - ${b}^2 \na = ${a}`,
      });
    }

    if (interaction.options.getSubcommand() === "hypotenuse") {
      const a = interaction.options.getNumber("leg_1");
      const b = interaction.options.getNumber("leg_2");
      const c = a ** 2 + b ** 2;
      interaction.reply({
        content: `a = ${a} \nb = ${b} \n\nc = ${a}^2 + ${b}^2 \nc = ${c}`,
      });
    }
  }
}
