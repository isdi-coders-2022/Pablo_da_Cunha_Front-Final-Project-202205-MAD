import { MemoryRouter } from 'react-router-dom';
import { iBar } from '../interfaces/iBar';
import { iUser } from '../interfaces/iUser';
import { barReducer } from '../reducers/bar/bar.reducer';
import { userReducer } from '../reducers/user/user.reducer';
import { render, screen } from '../utils/test.utils';
import Bars from './bars';



const mockBar: [iBar] = [
    {
    _id: '1',
    name: 'bar1',
    description: 'x',
    image: 'x',
    adress: 'x',
    brews: [],
},
];

const mockUser: iUser = {
    name: 'test',
    email: 'test',
    password: 'test',
    role: 'Owner',
};

const reducer = {
    user: userReducer,
    bar: barReducer,
};

const preloadedState = {
    user: mockUser as iUser,
    bar: mockBar as Array<iBar>,
};

describe('Given the component Bars', () => {
    describe('When calling it', () => {
        test('Then it should render a list of bars', () => {
            render(
                <MemoryRouter>
                    <Bars />
                </MemoryRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );

            const bars = screen.getByText('bar1');
            expect(bars).toBeInTheDocument();

        });
    });
});
