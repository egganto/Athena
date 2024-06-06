import { SlashCommandBuilder } from "discord.js";

const volumeCommand = new SlashCommandBuilder()
  .setName('volume')
  .setDescription('Finds the volume of a shape')
  // subcommand for cube
  .addSubcommand((subcommand) =>
    subcommand
      .setName('cube')
      .setDescription('Finds the volume of a cube.')
      .addNumberOption((option) =>
        option
        .setName('s')
        .setDescription('Input the side length of the cube.')
        .setRequired(true)
      )
  )

  // subcommand for sphere
  .addSubcommand((subcommand) =>
    subcommand
    .setName('sphere')
    .setDescription('Finds the volume of a sphere.')
    .addNumberOption((option) =>
      option
        .setName('r')
        .setDescription('Input the radius of the sphere.')
        .setRequired(true)
    )
  )

  // subcommand for cylinder
  .addSubcommand((subcommand) =>
    subcommand
    .setName('cylinder')
    .setDescription('Finds the volume of a cylinder.')
    .addNumberOption((option) =>
      option
        .setName('r')
        .setDescription('Input the radius of the cylinder.')
        .setRequired(true)
    )
    .addNumberOption((option) =>
      option
        .setName('h')
        .setDescription('Input the height of the cylinder.')
        .setRequired(true)
    )
  );

export default volumeCommand.toJSON();
