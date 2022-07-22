import { iUser } from '../../interfaces/iUser';
import { userReducer } from './user.reducer';
import * as actions from './user.action.creator';
const mockedUser: iUser = {
  _id: '',
  name: 's',
  email: '',
  password: '1231',
  role: 'Owner',
};

describe('Given reducer reciperReducer', () => {
  describe('When calling it with load action with an array of recipes', () => {
    test('It should return a new state with thaht array', () => {
      const newState = userReducer(
        {
          _id: '',
          name: '1',
          email: '',
          password: '1',
          role: 'Owner',
        },

        actions.loadUserAction(mockedUser)
      );

      expect(newState).toEqual(mockedUser);
    });
  });
  describe('When calling it with update action with a user or partial user', () => {
    test('It should return a new state with a updated user', () => {
      const newState = userReducer(
        mockedUser,
        actions.updateUserAction({
          _id: '',
          name: 'se',
          email: '',
          password: '1231',
          role: 'Owner',
        })
      );
      expect(newState.name).toBe('se');
    });
 
  });
});
