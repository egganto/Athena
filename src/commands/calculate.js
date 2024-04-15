import { SlashCommandBuilder } from "discord.js";

const calculateCommand = new SlashCommandBuilder()
  .setName(`calculate`)
  .setDescription(`Calculates anything you input.`)
  .addStringOption((option) =>
    option
      .setName('input')
      .setDescription('Input to calculate.')
      .setRequired(true)
  );

export default calculateCommand.toJSON();
