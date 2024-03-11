import { config } from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';
import { REST, Routes } from 'discord.js';

config();

const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const rest = new REST({ version: '10' }).setToken(TOKEN);

client.on('ready', () => console.log(`${client.user.tag} is online.`));

// Responds to the sum command
client.on('interactionCreate', (interaction) => {
  if (interaction.isChatInputCommand()) {
    const a = interaction.options.getInteger('a');
    const b = interaction.options.getInteger('b');
    const c = a + b;
    interaction.reply({ content: `The sum is ${c}`,
    });
  }
});

async function main() {
  // Available slash commands to use
  const commands = [
    {
      name: `sum`,
      description: `Finds the sum of 2 numbers`,
      options: [
        {
          name: 'a',
          description: 'Value of a',
          type: 4,
          required: true,
        },
        {
          name: 'b',
          description: 'Value of b',
          type: 4,
          require: true,
        },
      ]
    },
  ];

    try {
      console.log('Started refreshing application (/) commands.');
      await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands,
      });
      client.login(TOKEN);
    } catch (err) {
      console.log(err);
    }
};

main();

client.login(TOKEN);

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});
