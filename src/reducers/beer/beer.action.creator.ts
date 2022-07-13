import { createAction } from '@reduxjs/toolkit';
import { iBeer } from '../../interfaces/iBeer';
import { actionTypes } from './beer.action.types';

export interface iAction {
    type: actionTypes;
    payload: any;
}

export const loadBeerAction = createAction<Array<iBeer>>(
    actionTypes['beer@load']
);

