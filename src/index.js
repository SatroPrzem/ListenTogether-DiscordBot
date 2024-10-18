require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
	],
});

console.log("elo", process.env.DISCORD_BOT_TOKEN);

client.on("ready", (client) => {
	console.log(`✅ Logged in as: `, client.user.tag);
});

client.on("messageCreate", (message) => {
	if (message.author.bot) {
		return;
	}

	if (message.content === "hello") {
		message.reply("hello");
	}
});

client.login(process.env.DISCORD_BOT_TOKEN);
