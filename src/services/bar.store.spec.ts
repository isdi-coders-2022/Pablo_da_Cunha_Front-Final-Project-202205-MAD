import { iBar } from '../interfaces/iBar';
import { BarHttpStore } from './bar.store';

const bar1: iBar = {
    name: '',
    description: '',
    image: '',
    adress: '',
    beers: [],
};
const bar2: iBar = {
    name: '',
    description: '',
    image: '',
    adress: '',
    beers: [],
};

describe('Given BarHttpStore', () => {
    describe('When getAllBars is called', () => {
        test('Then it shoul return an array of bars', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue([bar1, bar2]),
            });
            const api = new BarHttpStore();
            const response = await api.getAllBars();
            expect(response).toEqual([bar1, bar2]);
        });
    });
    describe('When getBars is called', () => {
        test('Then it shoul return an bars', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(bar1),
            });
            const api = new BarHttpStore();
            const response = await api.getBar('');
            expect(response).toEqual(bar1);
        });
    });
});
