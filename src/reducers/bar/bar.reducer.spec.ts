// import { recipeReducer } from './recipes.reducer';
import { iBar } from '../../interfaces/iBar';
import * as actions from './bar.action.creator';
// import { AnyAction } from '@reduxjs/toolkit';
// import { iRecipe } from '../../interfaces/interfaces';
import { barReducer } from './bar.reducer';

const mockedArray: Array<iBar> = [
  {
    _id: '1',
    name: 'Aler',
    image: '',
    description: '',
    adress: '',
    brews: [],
    
    
  },
  {
    _id: '2',
    name: 'Aler',
    image: '',
    description: '',
    adress: '',
    brews: [],
    
  },
];
describe('Given bar reducer', () => {
  describe('When calling it with load action with an array of bar', () => {
    test('It should return a new state with that array of recipes', () => {
      const newState = barReducer(
        [],
        actions.loadBarAction(mockedArray)
      );
      expect(newState).toEqual(mockedArray);
    });
  });

});
