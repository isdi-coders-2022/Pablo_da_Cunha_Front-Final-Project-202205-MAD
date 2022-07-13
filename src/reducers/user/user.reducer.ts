import { createReducer } from '@reduxjs/toolkit';
import { userWithToken } from '../../interfaces/iUser';
import { loadUserAction, updateUserAction } from './user.action.creator';

const initialState: userWithToken = {
    token: '',
    user: {
        id: '',
        name: '',
        email: '',
        password: '',
        beers: [],
        role: '',
    },
};
export const userReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(loadUserAction, (_state, action) => action.payload)
        .addCase(updateUserAction, (state, action) => (state = action.payload))
        .addDefaultCase((state) => state);
});
