// volume cargo

export default function volumeC(interaction) {
    if (interaction.commandName === "volume") {
      if (interaction.options.getSubcommand() === "cube") {
        const s = interaction.options.getNumber("s");
        const V = s ** 3;
        interaction.reply({ content: `V = ${s}^3 \nV = ${V}` });
      }

      if (interaction.options.getSubcommand() === "sphere") {
        const r = interaction.options.getNumber("r");
        const V = (4 / 3) * Math.PI * r ** 3;
        interaction.reply({ content: `V = (4/3) * π * (${r}^3) \nV = ${V}` });
      }

      if (interaction.options.getSubcommand() === "cylinder") {
        const r = interaction.options.getNumber("r");
        const h = interaction.options.getNumber("h");
        const V = Math.PI * r ** 2 * h;
        interaction.reply({ content: `V = π * (${r}^2) * ${h} \nV = ${V}` });
      }

      if (interaction.options.getSubcommand() === "cuboid") {
        const l = interaction.options.getNumber("l");
        const w = interaction.options.getNumber("w");
        const h = interaction.options.getNumber("h");
        const V = l * w * h;
        interaction.reply({ content: `V = ${l} * ${w} * ${h} \nV = ${V}` });
      }

      if (interaction.options.getSubcommand() === "triangularpyramid") {
        const b = interaction.options.getNumber("b");
        const h = interaction.options.getNumber("h");
        const V = (1 / 3) * b * h;
        interaction.reply({ content: `V = (1/3) * ${b} * ${h} \nV = ${V}` });
      }

      if (interaction.options.getSubcommand() === "squarepyramid") {
        const s = interaction.options.getNumber("s");
        const h = interaction.options.getNumber("h");
        const V = (1 / 3) * s ** 2 * h;
        interaction.reply({
          content: `V = (1/3) * (${s}^2) * ${h} \nV = ${V}`,
        });
      }

      if (interaction.options.getSubcommand() === "cone") {
        const r = interaction.options.getNumber("r");
        const h = interaction.options.getNumber("h");
        const V = (1 / 3) * Math.PI * r ** 2 * h;
        interaction.reply({
          content: `V = (1/3) * π * (${r}^2) * ${h} \nV = ${V}`,
        });
      }

      if (interaction.options.getSubcommand() === "triangularprism") {
        const b = interaction.options.getNumber("b");
        const h = interaction.options.getNumber("h");
        const V = b * h;
        interaction.reply({ content: `V = ${b} * ${h} \nV = ${V}` });
      }
    }
};
