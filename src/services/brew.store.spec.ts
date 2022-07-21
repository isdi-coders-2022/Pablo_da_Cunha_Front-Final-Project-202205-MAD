import { iBrew } from '../interfaces/iBrew';
import { BrewHttpStore } from './brew.store';

const brew1: iBrew = {
    name: '',
    image: '',
    video: '',
    tasted: false,
    description: '',
    cereal: 'Wheat',
    style: 'Blonde',
    type: 'Lager',
};
const brew2: iBrew = {
    name: '',
    image: '',
    video: '',
    tasted: false,
    description: '',
    cereal: 'Barley',
    style: 'Red',
    type: 'Ale',
};

describe('Given BrewHttpStore', () => {
    describe('When getAllBrews is called', () => {
        test('Then it shoul return an array of brews', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue([brew1, brew2]),
            });
            const api = new BrewHttpStore();
            const response = await api.getAllBrews();
            expect(response).toEqual([brew1, brew2]);
        });
    });
    describe('When getBrews is called', () => {
        test('Then it shoul return a brew', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(brew1),
            });
            const api = new BrewHttpStore();
            const response = await api.getBrew('');
            expect(response).toEqual(brew1);
        });
    });
});
