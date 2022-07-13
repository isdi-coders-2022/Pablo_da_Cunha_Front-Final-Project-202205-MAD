import { configureStore } from '@reduxjs/toolkit';
import { iBar } from '../interfaces/iBar';
import { iBeer } from '../interfaces/iBeer';
import { userWithToken } from '../interfaces/iUser';
import { barReducer } from '../reducers/bar/bar.reducer';
import { beerReducer } from '../reducers/beer/beer.reducer';
import { userReducer } from '../reducers/user/user.reducer';

export interface iStore {
    beer: Array<iBeer>;
    bar: Array<iBar>;
    user: userWithToken;
}

const preloadedState = {
    beer: [] as Array<iBeer>,
    bar: [] as Array<iBar>,
    user: {} as userWithToken,
};

export const store = configureStore({
    reducer: {
        beer: beerReducer,
        bar: barReducer,
        user: userReducer,
    },
    preloadedState,
});
