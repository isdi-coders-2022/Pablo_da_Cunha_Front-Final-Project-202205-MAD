import { iBrew } from '../interfaces/iBrew';

export class BrewHttpStore {
    apiUrl: string;
    constructor() {
        this.apiUrl = 'http://localhost:3400/brew/';
    }

    async getAllBrews(): Promise<Array<iBrew>> {
        const resp = await fetch(this.apiUrl);
        return await resp.json();
    }

    async getBrew(id: string): Promise<iBrew> {
        const resp = await fetch(this.apiUrl + id.toString());
        return await resp.json();
    }
}
