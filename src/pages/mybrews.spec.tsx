import { MemoryRouter } from 'react-router-dom';
import { iBrew } from '../interfaces/iBrew';
import { iUser } from '../interfaces/iUser';
import { brewReducer } from '../reducers/brew/brew.reducer';
import { userReducer } from '../reducers/user/user.reducer';
import { render, screen } from '../utils/test.utils';
import MyBrews from './mybrews';

const mockBrew: iBrew = {
    cereal: 'Barley',
    description: '',
    image: '',
    name: 'TEST',
    style: 'Blonde',
    tasted: false,
    type: 'Ale',
    video: '',
    _id: 'testid',
};

const mockUser: iUser = {
    name: 'test',
    email: 'test',
    password: 'test',
    role: 'Owner',
    brews: [mockBrew],
};

const reducer = {
    user: userReducer,
    brew: brewReducer,
};

const preloadedState = {
    user: mockUser as iUser,
    brew: [mockBrew] as Array<iBrew>,
};

describe('Given the component MyBrews', () => {
    describe('When calling it with a logged user', () => {
        test('Then it should render a list of brews', () => {
            render(
                <MemoryRouter>
                    <MyBrews />
                </MemoryRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );

            const brew = screen.getByText('TEST');
            expect(brew).toBeInTheDocument();

        });
    });
});
