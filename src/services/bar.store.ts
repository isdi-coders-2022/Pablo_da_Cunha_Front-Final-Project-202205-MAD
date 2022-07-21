import { iBar } from '../interfaces/iBar';

export class BarHttpStore {
    apiUrl: string;
    constructor() {
        this.apiUrl = 'http://localhost:3400/bar/';
    }

    async getAllBars(): Promise<Array<iBar>> {
        const resp = await fetch(this.apiUrl);
        return await resp.json();
    }

    async getBar(id: iBar['_id']): Promise<iBar> {
        if (!id) throw new Error()
        const resp = await fetch(this.apiUrl + id.toString());
        return await resp.json();
    }
}
