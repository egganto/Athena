import { SlashCommandBuilder } from "discord.js";

// define the slash command for volume calculations
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
  )
  // subcommand for cuboid
  .addSubcommand((subcommand) =>
    subcommand
      .setName('cuboid')
      .setDescription('Finds the volume of a cuboid.')
      .addNumberOption((option) =>
        option
          .setName('l')
          .setDescription('Input the length of the cuboid.')
          .setRequired(true)
      )
      .addNumberOption((option) =>
        option
          .setName('w')
          .setDescription('Input the width of the cuboid.')
          .setRequired(true)
      )
      .addNumberOption((option) =>
        option
          .setName('h')
          .setDescription('Input the height of the cuboid.')
          .setRequired(true)
      )
  )
  // subcommand for triangular pyramid
  .addSubcommand((subcommand) =>
    subcommand
      .setName('triangularpyramid')
      .setDescription('Finds the volume of a triangular pyramid.')
      .addNumberOption((option) =>
        option
          .setName('b')
          .setDescription('Input the base length of the triangular pyramid.')
          .setRequired(true)
      )
      .addNumberOption((option) =>
        option
          .setName('h')
          .setDescription('Input the height of the triangular pyramid.')
          .setRequired(true)
      )
  )
  // subcommand for square pyramid
  .addSubcommand((subcommand) =>
    subcommand
      .setName('squarepyramid')
      .setDescription('Finds the volume of a square pyramid.')
      .addNumberOption((option) =>
        option
          .setName('s')
          .setDescription('Input the base length of the square pyramid.')
          .setRequired(true)
      )
      .addNumberOption((option) =>
        option
          .setName('h')
          .setDescription('Input the height of the square pyramid.')
          .setRequired(true)
      )
  )
  // subcommand for cone
  .addSubcommand((subcommand) =>
    subcommand
      .setName('cone')
      .setDescription('Finds the volume of a cone.')
      .addNumberOption((option) =>
        option
          .setName('r')
          .setDescription('Input the radius of the cone.')
          .setRequired(true)
      )
      .addNumberOption((option) =>
        option
          .setName('h')
          .setDescription('Input the height of the cone.')
          .setRequired(true)
      )
  )
  // subcommand for prism
  .addSubcommand((subcommand) =>
    subcommand
      .setName('triangularprism')
      .setDescription('Finds the volume of a triangular prism.')
      .addNumberOption((option) =>
        option
          .setName('b')
          .setDescription('Input the area of the base of the triangular prism.')
          .setRequired(true)
      )
      .addNumberOption((option) =>
        option
          .setName('h')
          .setDescription('Input the height of the triangular prism.')
          .setRequired(true)
      )
  );

export default volumeCommand.toJSON();
