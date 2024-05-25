import { config } from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';
import { REST, Routes } from 'discord.js';
import basicCommand from './commands/basic.js';
import calculateCommand from './commands/calculate.js';
import pythagoreanCommand from './commands/pythagorean_theorem.js';
import pingCommand from './commands/ping.js';
import areaCommand from './commands/area.js';
import perimeterCommand from './commands/perimeter.js';

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

const rest = new REST({ version: '10' }).setToken(TOKEN);

client.on('ready', () => console.log(`${client.user.tag} is online.`));

// ping command interaction
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    interaction.reply({ content: 'Pong!', 
    });
  }
});

// basic command interaction
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'basic') {
    if (interaction.options.getSubcommand() === 'sum') {
      const a = interaction.options.getNumber('a');
      const b = interaction.options.getNumber('b');
      const c = a + b;
      interaction.reply({ content: `${a} + ${b} = ${c}`,
      })
    }

    if (interaction.options.getSubcommand() === 'difference') {
      const a = interaction.options.getNumber('a');
      const b = interaction.options.getNumber('b');
      const c = a - b;
      interaction.reply({ content: `${a} - ${b} = ${c}`,
      })
    }

    if (interaction.options.getSubcommand() === 'product') {
      const a = interaction.options.getNumber('a');
      const b = interaction.options.getNumber('b');
      const c = a * b;
      interaction.reply({ content: `${a} * ${b} = ${c}`,
      })
    }

    if (interaction.options.getSubcommand() === 'quotient') {
      const a = interaction.options.getNumber('a');
      const b = interaction.options.getNumber('b');
      const c = a / b;
      interaction.reply({ content: `${a} / ${b} = ${c}`,
      })
    }
  }
});

// calculate interaction
client.on('interactionCreate', async (interaction) => {
  if (interaction.commandName === 'calculate') {
    const input = interaction.options.getString('input');
    const output = eval(input);
    interaction.reply({ content: `${input} = ${output}`,
    })
  }
});

// pythagorean theorem interaction
client.on('interactionCreate', async (interaction) => {
  if (interaction.commandName === 'pythagorean') {
    if (interaction.options.getSubcommand() === 'leg') {
      const b = interaction.options.getNumber('leg');
      const c = interaction.options.getNumber('hypotenuse');
      const a = c**2 - b**2;
      interaction.reply({ content: `c = ${c} \nb = ${b} \n\na = ${c}^2 - ${b}^2 \na = ${a}`,
      })
    }

    if (interaction.options.getSubcommand() === 'hypotenuse') {
      const a = interaction.options.getNumber('leg_1');
      const b = interaction.options.getNumber('leg_2');
      const c = a**2 + b**2;
      interaction.reply({ content: `a = ${a} \nb = ${b} \n\nc = ${a}^2 + ${b}^2 \nc = ${c}`, })
    }
  }
});

// area interaction
client.on('interactionCreate', async (interaction) => {
  if (interaction.commandName === 'area') {
    if (interaction.options.getSubcommand() === 'rectangle') {
      const l = interaction.options.getNumber('l');
      const w = interaction.options.getNumber('w');
      const A = l * w;
      interaction.reply({ content: `A = ${l} * ${w} \nA = ${A}`, 
      })
    }

    if (interaction.options.getSubcommand() === 'square') {
      const a = interaction.options.getNumber('a');
      const A = a**2;
      interaction.reply({ content: `A = ${a}^2 \nA = ${A}`, })
    }

    if (interaction.options.getSubcommand() === 'triangle') {
      const b = interaction.options.getNumber('b');
      const h = interaction.options.getNumber('h');
      const A = (1/2) * b * h;
      interaction.reply({ content: `A = (1/2) * ${b} * ${h} \nA = ${A}`, })
    }

    if (interaction.options.getSubcommand() === 'circle') {
      const r = interaction.options.getNumber('r');
      const A = 3.14 * (r ** 2);
      interaction.reply({ content: `A = 3.14 * (${r}^2) \nA = ${A}`,
      })
    }

    if (interaction.options.getSubcommand() === 'trapezoid') {
      const a = interaction.options.getNumber('a');
      const b = interaction.options.getNumber('b');
      const h = interaction.options.getNumber('h');
      const A = (1/2) * (a + b) * h;
      interaction.reply({ content: `A = (1/2) * (${a} + ${b}) * h \nA = ${A}`,
      })
    }

    if (interaction.options.getSubcommand() === 'ellipse') {
      const a = interaction.options.getNumber('a');
      const b = interaction.options.getNumber('b');
      const A = 3.14 * a * b;
      interaction.reply({ content: `A = 3.14 * ${a} * ${b} \nA = ${A}`,
      })
    }
  }
})

// perimeter interaction
client.on('interactionCreate', async (interaction) => {
  if (interaction.commandName === 'perimeter') {
    if (interaction.options.getSubcommand() === 'parallelogram') {
      const base = interaction.options.getNumber('base');
      const height = interaction.options.getNumber('height');
      const sum = base + height;
      const P = 2 * (base + height);
      interaction.reply({ content: `P = 2(base + height) \n
        P = 2(${base} + ${height} \n
        P = 2(${sum}) \n
        P = ${P}` })
    }
  }
})

  // Sends commands to Discord
  const commands = [basicCommand, calculateCommand, pythagoreanCommand, pingCommand, areaCommand, perimeterCommand];

(async () => {
  
    try {
      console.log(CLIENT_ID, TOKEN)
      console.log(`Started refreshing ${commands.length} application (/) commands.`);
      const data = await rest.put(
        Routes.applicationCommands(CLIENT_ID),
        { body: commands },
      );

      console.log(`Successfully reloaded ${data.length} application (/) commands.`);

      client.login(TOKEN);
    } catch (error) {
      console.error(`Failed to deploy application commands: ${error}`);
    }
})();
