import { config } from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { REST, Routes } from "discord.js";
import basicCommand from "./commands/basic.js";
import calculateCommand from "./commands/calculate.js";
import pythagoreanCommand from "./commands/pythagorean_theorem.js";
import pingCommand from "./commands/ping.js";
import areaCommand from "./commands/area.js";
import perimeterCommand from "./commands/perimeter.js";
import volumeCommand from "./commands/volume.js";

import volumeC from "./cargo/volumeC.js";
import areaC from "./cargo/areaC.js";
import perimeterC from "./cargo/perimeterC.js";
import pythagorean_theoremC from "./cargo/pythagorean_theoremC.js";
import calculateC from "./cargo/calculateC.js";
import basicC from "./cargo/basicC.js";
import pingC from "./cargo/pingC.js";

config();

const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
// const GUILD_ID = process.env.GUILD_ID;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const rest = new REST({ version: "10" }).setToken(TOKEN);

client.on("ready", () => console.log(`${client.user.tag} is online.`));

// ping command interaction
client.on("interactionCreate", async (interaction) => {
  pingC(interaction);
});

// basic command interaction
client.on("interactionCreate", async (interaction) => {
  basicC(interaction);
});

// calculate interaction
client.on("interactionCreate", async (interaction) => {
  calculateC(interaction);
});

// pythagorean theorem interaction
client.on("interactionCreate", async (interaction) => {
  pythagorean_theoremC(interaction);
});

// area interaction
client.on("interactionCreate", async (interaction) => {
  areaC(interaction);
});

// volume interaction
client.on("interactionCreate", async (interaction) => {
  volumeC(interaction);
});

// perimeter interaction
client.on("interactionCreate", async (interaction) => {
  perimeterC(interaction);
});

// Sends commands to Discord
const commands = [
  basicCommand,
  calculateCommand,
  pythagoreanCommand,
  pingCommand,
  areaCommand,
  perimeterCommand,
  volumeCommand,
];

(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    );
    const data = await rest.put(Routes.applicationCommands(CLIENT_ID), {
      body: commands,
    });

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
    client.login(TOKEN);
  } catch (error) {
    console.error(`Failed to deploy application commands: ${error}`);
  }
})();
