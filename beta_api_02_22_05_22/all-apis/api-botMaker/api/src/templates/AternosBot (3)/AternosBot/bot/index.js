const { Client } = require("discord.js");

const client = new Client({
  allowedMentions: {
    parse: ['roles', 'users'],
    repliedUser: true
  },
  intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_MESSAGES",
    "GUILD_PRESENCES",
    "GUILD_MESSAGE_REACTIONS"
  ]
});

client.login("ODk3OTY5NDIzNjExMjAzNjM2.YWdZMg.7Aw33k7dtI_tgu_x3h2ZNVULGKs");

client.on("ready", () => { console.log("O bot está pronto para ser executado!"); });

client.on("messageCreate", async (message) => {

});