// area cargo

export default function areaC(interaction) {
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
}