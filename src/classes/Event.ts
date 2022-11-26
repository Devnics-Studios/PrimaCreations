import Prima from "./Prima";

export default abstract class Event {

    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public abstract run(client: Prima, ...any: any): Promise<any>;
}