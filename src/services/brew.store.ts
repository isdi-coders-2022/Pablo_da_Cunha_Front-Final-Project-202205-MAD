import { iBrew } from '../interfaces/iBrew';

export class BrewHttpStore {
    apiUrl: string;
    constructor() {
        this.apiUrl = 'http://localhost:3400/brew/';
    }

    getAllBrews(): Promise<Array<iBrew>> {
        return fetch(this.apiUrl).then((resp) => resp.json());
    }

    getBrew(id: iBrew['_id']): Promise<iBrew> {
        if (!id) throw new Error()
        return fetch(this.apiUrl + id.toString()).then((resp) => resp.json());
    }
}
