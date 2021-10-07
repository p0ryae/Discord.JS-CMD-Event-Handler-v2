const ClientManager = require('./src/ClientManager');
const client = new ClientManager({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  ws: {
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
  },
  disableMentions: 'everyone',
});

client.setup();