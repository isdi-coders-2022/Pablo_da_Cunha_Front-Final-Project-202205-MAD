import { createReducer } from '@reduxjs/toolkit';
import { iBrew } from '../../interfaces/iBrew';
import {
    loadBrewOneAction,
    unloadBrewOneAction,
} from './brewone.action.creator';

const initialState: iBrew = {
    _id: '',
    name: '',
    image: '',
    video: '',
    tasted: true,
    description: '',
    cereal: 'Barley',
    style: 'Blonde',
    type: 'Lager',
};
export const brewOneReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(loadBrewOneAction, (_state, action) => action.payload)
        .addCase(unloadBrewOneAction, (state) => (state = initialState))
        .addDefaultCase((state) => state);
});
