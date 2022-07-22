import { iBar } from '../interfaces/iBar';
import { BarHttpStore } from './bar.store';

const bar1: iBar = {
    _id: '1',
    name: 'bar1',
    description: 'desc',
    image: 'img',
    adress: 'address',
    brews: [],
};
const bar2: iBar = {
    _id: '2',
    name: 'bar2',
    description: 'descc',
    image: 'imgg',
    adress: 'addres',
    brews: [],
};

const api = new BarHttpStore();
describe('Given the services htttp.ingredients is instantiated', () => {
  describe('When the method getAllbars is called', () => {
    test('Them should be render', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([bar1, bar2]),
      });
      const result = await api.getAllBars();

      expect(fetch).toBeCalled();
      expect(result).toEqual([bar1, bar2]);
    });
  });
  describe('When the method getBar is called', () => {});
  test('Then it should return a Bar', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(bar1),
    });

    const response = await api.getBar(bar1._id as string);
    expect(response).toEqual(bar1);
  })});

//   describe('When the method getBar is called', () => {});
//   test('Then it should return a Bar', async () => {
//     const error = new Error()
//     global.fetch = jest.fn().mockRejectedValue(undefined);

//     const response = await api.getBar(un);
//     expect(response).toEqual(error);
//   });