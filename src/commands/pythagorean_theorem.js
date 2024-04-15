import { SlashCommandBuilder } from "discord.js";

const pythagoreanCommand = new SlashCommandBuilder()
  .setName('pythagorean')
  .setDescription('Solves for a missing side from a right triangle.')
  // subcommand to find a or b
  .addSubcommand((subcommand) =>
    subcommand
    .setName('leg')
    .setDescription('Solves for a missing leg.')
    .addNumberOption((option) =>
      option
      .setName('leg')
      .setDescription('Input the value of a or b.')
      .setRequired(true))
    .addNumberOption((option) =>
      option
      .setName('hypotenuse')
      .setDescription('Input the value of c.')
      .setRequired(true)))

  // subcommand to find c
  .addSubcommand((subcommand) =>
    subcommand
    .setName('hypotenuse')
    .setDescription('Solves for the hypotenuse.')
    .addNumberOption((option) =>
      option
      .setName('leg_1')
      .setDescription('Input the value of a.')
      .setRequired(true))
    .addNumberOption((option) =>
      option
      .setName('leg_2')
      .setDescription('Input the value of b.')
      .setRequired(true)));

export default pythagoreanCommand.toJSON();
