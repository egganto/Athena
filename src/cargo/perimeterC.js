// perimeter cargo

export default function areaC(interaction) {
  if (interaction.commandName === "perimeter") {
    if (interaction.options.getSubcommand() === "parallelogram") {
      const base = interaction.options.getNumber("base");
      const height = interaction.options.getNumber("height");
      const sum = base + height;
      const P = 2 * (base + height);
      interaction.reply({
        content: `P = 2(base + height) \nP = 2(${base} + ${height} \nP = 2(${sum}) \nP = ${P}`,
      });
    }

    if (interaction.options.getSubcommand() === "triangle") {
      const a = interaction.options.getNumber("a");
      const b = interaction.options.getNumber("b");
      const c = interaction.options.getNumber("c");
      const P = a + b + c;
      interaction.reply({
        content: `P = a + b + c \nP = ${a} + ${b} + ${c} \nP = ${P}`,
      });
    }

    if (interaction.options.getSubcommand() === "rectangle") {
      const length = interaction.options.getNumber("length");
      const width = interaction.options.getNumber("width");
      const sum = length + width;
      const P = 2 * sum;
      interaction.reply({
        content: `P = 2(length + width) \nP = 2(${length} + ${width}) \nP = 2(${sum}) \nP = ${P}`,
      });
    }

    if (interaction.options.getSubcommand() === "square") {
      const a = interaction.options.getNumber("a");
      const P = 4 * a;
      interaction.reply({ content: `P = 4a \nP = 4(${a}) \nP = (${P})` });
    }

    if (interaction.options.getSubcommand() === "trapezoid") {
      const a = interaction.options.getNumber("a");
      const b = interaction.options.getNumber("b");
      const c = interaction.options.getNumber("c");
      const d = interaction.options.getNumber("d");
      const P = a + b + c + d;
      interaction.reply({
        content: `P = a + b + c + d \nP = ${a} + ${b} + ${c} + ${d} \nP = ${P}`,
      });
    }

    if (interaction.options.getSubcommand() === "kite") {
      const a = interaction.options.getNumber("a");
      const b = interaction.options.getNumber("b");
      const A = 2 * a;
      const B = 2 * b;
      const P = A + B;
      interaction.reply({
        content: `P = 2a + 2b \nP = 2(${a}) + 2(${b}) \nP = ${A} + ${B} \nP = ${P}`,
      });
    }

    if (interaction.options.getSubcommand() === "rhombus") {
      const a = interaction.options.getNumber("a");
      const P = 4 * a;
      interaction.reply({ content: `P = 4a \nP = 4(${a}) \nP = ${P}` });
    }

    if (interaction.options.getSubcommand() === "hexagon") {
      const a = interaction.options.getNumber("a");
      const P = 6 * a;
      interaction.reply({ content: `P = 6a \nP = 6(${a}) \nP = ${P}` });
    }
  }
}
