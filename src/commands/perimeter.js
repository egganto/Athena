import { SlashCommandBuilder } from "discord.js";

const perimeterCommand = new SlashCommandBuilder()
  .setName("perimeter")
  .setDescription("Solves for the perimeter")
  // subcommand for parallelogram
  .addSubcommand((subcommand) =>
    subcommand
    .setName("parallelogram")
    .setDescription("Solves for the perimeter of the parallelogram")
    .addNumberOption((option) =>
      option
      .setName("base")
      .setDescription("The value of the base of the parallelogram")
      .setRequired(true)
    )
    .addNumberOption((option) =>
      option
        .setName("height")
        .setDescription("The value of height of the parallelogram")
        .setRequired(true)
      )
    )

  // subcommand for triangle
  .addSubcommand((subcommand) =>
    subcommand)
    .setName("triangle")
    .setDescription("Finds the perimeter of a triangle")
    .addNumberOption((option) =>
      option
      .setName("a")
      .setDescription("value of side a of the triangle")
      .setRequired(true)
    )
    .addNumberOption((option) =>
      option
      .setName("b")
      .setDescription("value of side b of the triangle")
      .setRequired(true)
    )
    .addNumberOption((option) =>
      option
      .setName("c")
      .setDescription("value of side c of the triangle")
      .setRequired(true)
    )

  // subcommand for rectangle
  .addSubcommand((subcommand) =>
    subcommand
    .setName("rectangle")
    .setDescription("finds the perimeter of a rectangle")
    .addNumberOption((option) =>
      option
      .setName("length")
      .setDescription("value of length of rectangle")
      .setRequired(true)
    )
    .addNumberOption((option) =>
      option
      .setName("width")
      .setDescription("value of length of rectangle")
      .setRequired(true)
    )
  )

  // subcommand for square
  .addSubcommand((subcommand) =>
    subcommand
    .setName("square")
    .setDescription("fnds perimeter of a square")
    .addNumberOption((option) =>
      option
      .setName("a")
      .setDescription("value of a side of a square")
      .setRequired(true)
    )
  )

  // subcommand for trapezoid
  .addSubcommand((subcommand) =>
    subcommand
    .setName("trapezoid")
    .setDescription("finds perimeter of trapezoid")
    .addNumberOption((option) =>
      option
      .setName("a")
      .setDescription("value of side a of trapezoid")
      .setRequired(true)
    )
    .addNumberOption((option) =>
      option
      .setName("b")
      .setDescription("value of side b of trapezoid")
      .setRequired(true)
    )
    .addNumberOption((option) =>
      option
      .setName("c")
      .setDescription("value of side c of trapezoid")
      .setRequired(true)
    )
    .addNumberOption((option) =>
      option
      .setName("d")
      .setDescription("value of side d of trapezoid")
      .setRequired(true)
    )
  )

  // subcommand for kite
  .addSubcommand((subcommand) =>
    subcommand
    .setName("kite")
    .setDescription("finds perimeter of kite")
    .addNumberOption((option) =>
      option
      .setName("a")
      .setDescription("length of first pair of equal sides")
      .setRequired(true)
    )
    .addNumberOption((option) =>
      option
      .setName("b")
      .setDescription("length of second pair of equal sides")
      .setRequired(true)
    )
  )

  // subcommand for rhombus
  .addSubcommand((subcommand) =>
    subcommand
    .setName("rhombus")
    .setDescription("finds perimeter of rhombus")
    .addNumberOption((option) =>
      option
      .setName("a")
      .setDescription("length of a side")
      .setRequired(true)
    )
  )

  // subcommand for hexagon
  .addSubcommand((subcommand) =>
    subcommand
    .setName("hexagon")
    .setDescription("finds perimeter of hexagon")
    .addNumberOption((option) =>
      option
      .setName("a")
      .setDescription("length of a side")
      .setRequired(true)
    )
  );

export default perimeterCommand.toJSON();
