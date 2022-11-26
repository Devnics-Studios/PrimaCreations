import { ApplicationCommandData, ApplicationCommandOptionData, ApplicationCommandType } from "discord.js";

export default abstract class Command {

    public type: ApplicationCommandType;
    public name: string;
    public description: string;
    public options: ApplicationCommandOptionData[];
    public data: ApplicationCommandData;

    constructor(type: ApplicationCommandType, name: string, description: string, options: ApplicationCommandOptionData[]) {
        this.name = name;
        this.description = description;
        this.options = options;
        this.type = type;
        this.data = {
            type,
            name, 
            description,
            options
        }  
    }
}