// import { recipeReducer } from './recipes.reducer';
import { iBrew } from '../../interfaces/iBrew';
import * as actions from './brew.action.creator';
// import { AnyAction } from '@reduxjs/toolkit';
// import { iRecipe } from '../../interfaces/interfaces';
import { brewReducer } from './brew.reducer';

const mockedArray: Array<iBrew> = [
  {
    _id: '1',
    name: 'Aler',
    image: '',
    video: '',
    tasted: true,
    description: '',
    cereal: 'Wheat',
    style: 'Blonde',
    type: 'Ale',
    
  },
  {
    _id: '2',
    name: 'Lage',
    image: '',
    video: '',
    tasted: true,
    description: '',
    cereal: 'Wheat',
    style: 'Blonde',
    type: 'Lager',
    
  },
];
describe('Given brew reducer', () => {
  describe('When calling it with load action with an array of brew', () => {
    test('It should return a new state with that array of recipes', () => {
      const newState = brewReducer(
        [],
        actions.loadBrewAction(mockedArray)
      );
      expect(newState).toEqual(mockedArray);
    });
  });

});
