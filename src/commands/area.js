import { SlashCommandBuilder } from "discord.js";

const areaCommand = new SlashCommandBuilder()
  .setName('area')
  .setDescription('Finds the area of a shape')
  // subcommand for rectangle
  .addSubcommand((subcommand) =>
    subcommand
      .setName('rectangle')
      .setDescription('Finds the area of a rectangle.')
      .addNumberOption((option) =>
        option
        .setName('l')
        .setDescription('Input the length of the rectangle.')
        .setRequired(true)
      )
      .addNumberOption((option) =>
        option
          .setName('w')
          .setDescription('Input the width of the rectangle.')
          .setRequired(true)))

  // subcommand for square
  .addSubcommand((subcommand) =>
    subcommand
    .setName('square')
    .setDescription('Finds the area of a square.')
    .addNumberOption((option) =>
      option
        .setName('s')
        .setDescription('Input the measurement for a side of a square.')
        .setRequired(true)))

  // subcommand for triangle
  .addSubcommand((subcommand) =>
    subcommand
      .setName('triangle')
      .setDescription('Finds the area of a triangle.')
      .addNumberOption((option) =>
        option
          .setName('b')
          .setDescription('Input the base of the triangle.')
          .setRequired(true)
      )
      .addNumberOption((option) =>
        option
          .setName('h')
          .setDescription('Input the height of the triangle.')
          .setRequired(true)))

  // subcommand for circle
  .addSubcommand((subcommand) =>
    subcommand
    .setName('circle')
    .setDescription('Finds the area of a circle.')
    .addNumberOption((option) =>
      option
        .setName('r')
        .setDescription('radius of the circle.')
        .setRequired(true)))

  // subcommand for trapezoid
  .addSubcommand((subcommand) =>
    subcommand
      .setName('trapezoid')
      .setDescription('Finds the area of a trapezoid')
      .addNumberOption((option) =>
        option
          .setName('a')
          .setDescription('base 1 of the trapezoid.')
          .setRequired(true)
      )
      .addNumberOption((option) =>
        option
          .setName('b')
          .setDescription('base 2 of the trapezoid')
          .setRequired(true)
      )
      .addNumberOption((option) =>
        option
          .setName('h')
          .setDescription('vertical height of the trapezoid')
          .setRequired(true)))

  // subcommand for ellipse
  .addSubcommand((subcommand) =>
    subcommand
      .setName('ellipse')
      .setDescription('Finds the area of an ellipse')
      .addNumberOption((option) =>
        option
          .setName('a')
          .setDescription('radius of the major axis of the ellipse.')
          .setRequired(true)
      )
      .addNumberOption((option) =>
        option
          .setName('b')
          .setDescription('radius of the minor axis of the ellipse.')
          .setRequired(true)));

export default areaCommand.toJSON();
