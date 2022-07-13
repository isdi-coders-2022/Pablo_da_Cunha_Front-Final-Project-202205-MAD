import { iBeer } from '../interfaces/iBeer';

export class BeerHttpStore {
    apiUrl: string;
    constructor() {
        this.apiUrl = 'http://localhost:3400/beer/';
    }

    getAllBeers(): Promise<Array<iBeer>> {
        return fetch(this.apiUrl).then((resp) => resp.json());
    }

    getBeer(id: iBeer['id']): Promise<iBeer> {
        if (!id) throw new Error()
        return fetch(this.apiUrl + id.toString()).then((resp) => resp.json());
    }
}
