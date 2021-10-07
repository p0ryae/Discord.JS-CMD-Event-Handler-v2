const chalk = require('chalk');

module.exports = (client) => {
    console.log(`${chalk.bold.green('[BOT]')} Logged in as ${client.user.username}#${client.user.discriminator}.`);
};