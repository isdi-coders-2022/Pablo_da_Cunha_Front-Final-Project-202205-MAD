import { iBeer } from '../interfaces/iBeer';
import { BeerHttpStore } from './beer.store';

const beer1: iBeer = {
    name: '',
    image: '',
    video: '',
    tasted: false,
    description: '',
    cereal: 'Wheat',
    style: 'Blonde',
    type: 'Lager',
};
const beer2: iBeer = {
    name: '',
    image: '',
    video: '',
    tasted: false,
    description: '',
    cereal: 'Barley',
    style: 'Red',
    type: 'Ale',
};

describe('Given BeerHttpStore', () => {
    describe('When getAllBeers is called', () => {
        test('Then it shoul return an array of beers', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue([beer1, beer2]),
            });
            const api = new BeerHttpStore();
            const response = await api.getAllBeers();
            expect(response).toEqual([beer1, beer2]);
        });
    });
    describe('When getBeers is called', () => {
        test('Then it shoul return a beer', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(beer1),
            });
            const api = new BeerHttpStore();
            const response = await api.getBeer('');
            expect(response).toEqual(beer1);
        });
    });
});
