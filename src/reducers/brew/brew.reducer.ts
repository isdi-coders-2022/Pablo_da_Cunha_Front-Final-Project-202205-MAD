import { createReducer } from '@reduxjs/toolkit';
import { iBrew } from '../../interfaces/iBrew';
import { loadBrewAction } from './brew.action.creator';

const initialState: Array<iBrew> = [];
export const brewReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(loadBrewAction, (_state, action) => [...action.payload])
        .addDefaultCase((state) => state);
});
