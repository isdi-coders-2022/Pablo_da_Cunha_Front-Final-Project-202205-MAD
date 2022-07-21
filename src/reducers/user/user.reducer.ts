import { createReducer } from '@reduxjs/toolkit';
import { iUser } from '../../interfaces/iUser';
import { loadUserAction, updateUserAction } from './user.action.creator';

const initialState: iUser = {
        _id: '',
        name: '',
        email: '',
        password: '',
        brews: [],
        role: '',
    
};
export const userReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(loadUserAction, (_state, action) => action.payload)
        .addCase(updateUserAction, (state, action) => action.payload)
        .addDefaultCase((state) => state);
});
