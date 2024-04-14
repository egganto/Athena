import { config } from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';
import { REST, Routes } from 'discord.js';
import basicCommand from './commands/basic.js';

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

// ping command interaction
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

// basic command interaction
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'basic') {
    if (interaction.options.getSubcommand() === 'sum') {
      const a = interaction.options.getInteger('a');
      const b = interaction.options.getInteger('b');
      const c = a + b;
      interaction.reply({ content: `${a} + ${b} = ${c}`,
      })
    }

    if (interaction.options.getSubcommand() === 'difference') {
      const a = interaction.options.getInteger('a');
      const b = interaction.options.getInteger('b');
      const c = a - b;
      interaction.reply({ content: `${a} - ${b} = ${c}`,
      })
    }

    if (interaction.options.getSubcommand() === 'product') {
      const a = interaction.options.getInteger('a');
      const b = interaction.options.getInteger('b');
      const c = a * b;
      interaction.reply({ content: `${a} * ${b} = ${c}`,
      })
    }

    if (interaction.options.getSubcommand() === 'quotient') {
      const a = interaction.options.getInteger('a');
      const b = interaction.options.getInteger('b');
      const c = a / b;
      interaction.reply({ content: `${a} / ${b} = ${c}`,
      })
    }
  }
});

async function main() {
  
  // Sends commands to Discord
  const commands = [basicCommand];

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
