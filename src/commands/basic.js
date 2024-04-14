import { SlashCommandBuilder } from "discord.js";

const basicCommand = new SlashCommandBuilder()
  .setName(`basic`)
  .setDescription(`Basic operations (addition, subtraction, multiplication, and division)`)
  
  // Sum subcommand
  .addSubcommand((subcommand) =>
    subcommand
      .setName(`sum`)
      .setDescription(`Finds the sum of 2 numbers`)
      .addNumberOption((option) =>
        option
          .setName(`a`)
          .setDescription(`Value of a`)
          .setRequired(true))
      .addNumberOption((option) =>
        option
          .setName(`b`)
          .setDescription(`Value of b`)
          .setRequired(true)))

  // Difference subcommand
  .addSubcommand(subcommand =>
    subcommand
      .setName(`difference`)
      .setDescription(`Finds the difference of 2 numbers`)
      .addNumberOption((option) =>
        option
          .setName(`a`)
          .setDescription(`Value of a`)
          .setRequired(true))
      .addNumberOption((option) =>
        option
          .setName(`b`)
          .setDescription(`Value of b`)
          .setRequired(true)))
  
  // Product subcommand
  .addSubcommand((subcommand) =>
    subcommand
      .setName(`product`)
      .setDescription(`Finds the product of 2 numbers`)
      .addNumberOption((option) =>
        option
          .setName(`a`)
          .setDescription(`Value of a`)
          .setRequired(true))
      .addNumberOption((option) =>
        option
          .setName(`b`)
          .setDescription(`Value of b`)
          .setRequired(true)))
  
  // Quotient subcommand
  .addSubcommand((subcommand) =>
    subcommand
      .setName(`quotient`)
      .setDescription(`Finds the quotient of 2 numbers`)
      .addNumberOption((option) =>
        option
          .setName(`a`)
          .setDescription(`Value of a`)
          .setRequired(true))
      .addNumberOption((option) =>
        option
          .setName(`b`)
          .setDescription(`Value of b`)
          .setRequired(true)));

export default basicCommand.toJSON();
