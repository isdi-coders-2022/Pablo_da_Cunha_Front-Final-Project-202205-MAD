import { createReducer } from '@reduxjs/toolkit';
import { iBeer } from '../../interfaces/iBeer';
import { loadBeerAction } from './beer.action.creator';

const initialState: Array<iBeer> = [];
export const beerReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(loadBeerAction, (_state, action) => [...action.payload])
        .addDefaultCase((state) => state);
});
