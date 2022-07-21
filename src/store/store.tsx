import { configureStore } from '@reduxjs/toolkit';
import { iBar } from '../interfaces/iBar';
import { iBrew } from '../interfaces/iBrew';
import { iUser } from '../interfaces/iUser';
import { barReducer } from '../reducers/bar/bar.reducer';
import { brewReducer } from '../reducers/brew/brew.reducer';
import { brewOneReducer } from '../reducers/brewOne/brewOne.reducer';
import { userReducer } from '../reducers/user/user.reducer';

export interface iStore {
    brew: Array<iBrew>;
    bar: Array<iBar>;
    user: iUser;
    brewOne: iBrew;
}

const preloadedState = {
    brew: [] as Array<iBrew>,
    bar: [] as Array<iBar>,
    user: {} as iUser,
    brewOne: {} as iBrew,
};

export const store = configureStore({
    reducer: {
        brew: brewReducer,
        bar: barReducer,
        user: userReducer,
        brewOne: brewOneReducer,
    },
    preloadedState,
});
