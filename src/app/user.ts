export class User {
    id: number;
    userName: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
