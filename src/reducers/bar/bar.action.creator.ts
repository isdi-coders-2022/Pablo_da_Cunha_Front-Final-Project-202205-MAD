import { createAction } from '@reduxjs/toolkit';
import { iBar } from '../../interfaces/iBar';
import { actionTypes } from './bar.action.types';

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadBarAction = createAction<Array<iBar>>(
    actionTypes['bar@load']
);