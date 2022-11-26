import Prima from "./classes/Prima";

require("dotenv").config();

const client = new Prima({
    intents: ["Guilds", "MessageContent", "GuildMembers", "GuildMessages"]
});

client.start(process.env.TOKEN);