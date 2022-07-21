import { createAction } from '@reduxjs/toolkit';
import { iBrew } from '../../interfaces/iBrew';
import { actionTypes } from './brew.action.types';

export interface iAction {
    type: actionTypes;
    payload: any;
}

export const loadBrewAction = createAction<Array<iBrew>>(
    actionTypes['brew@load']
);

