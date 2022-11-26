import consola, { Consola } from "consola";
import { Client, ClientOptions, Collection } from "discord.js";
import fs from "fs/promises"
import Command from "./Command";

export default class Prima extends Client {

    public logger: Consola = consola;
    public commands: Collection<string, Command> = new Collection();

    constructor(options: ClientOptions) {
        super(options);
    }

    async start(token: string) {
        try {

            await this.loadCommands();
            await this.loadEvents();

            this.login(token);
        } catch (error) {
            this.logger.error(error)
        }
    }

    async loadCommands(dir = process.cwd() + "/src/commands") {
        const files = await fs.readdir(dir);

        files.forEach(file => {
            const cmdFile = require(dir + "/" + file)?.default;
            const cmd = new cmdFile();

            this.commands.set(cmd.name, cmd);
        })
    }

    async loadEvents(dir = process.cwd() + "/src/events") { 
        const files = await fs.readdir(dir);

        files.forEach(file => {
            const eventFile = require(dir + "/" + file)?.default;
            const event = new eventFile();
            
            this.on(event.name, event.run.bind(null, this));
        })
    }
}
