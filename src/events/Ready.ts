import Event from "../classes/Event";
import Prima from "../classes/Prima";

export default class ReadyEvent extends Event {

    constructor() {
        super("ready");
    }

    public async run(client: Prima): Promise<any> {
        
        client.logger.info(`Developed by Devnics`)
        client.logger.success(`Prima is online!`);

    }
}