import { createReducer } from '@reduxjs/toolkit';
import { iBar } from '../../interfaces/iBar';
import { loadBarAction } from './bar.action.creator';

const initialState: Array<iBar> = [];

export const barReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(loadBarAction, (_state, action) => [...action.payload])
        .addDefaultCase((state) => state);
});
