import { createAction } from '@reduxjs/toolkit';
import { iBrew } from '../../interfaces/iBrew';
import { actionTypes } from './brewone.action.types';

export interface iAction {
    type: actionTypes;
    payload: any;
}

export const loadBrewOneAction = createAction<iBrew>(
    actionTypes['brew@loadBrewOne']
);
export const unloadBrewOneAction = createAction<iBrew>(
    actionTypes['brew@unloadBrewOne']
);