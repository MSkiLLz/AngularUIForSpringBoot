export class Task {
    id: number;
    name: string = "";
    description: string = "";
    status: string = "";

    constructor(values: Object={}) {
        Object.assign(this, values);
    }
}
