import { SlashCommandBuilder } from "discord.js";

const pingCommand = new SlashCommandBuilder()
  .setName(`ping`)
  .setDescription(`Pings Athena.`);

export default pingCommand.toJSON();
