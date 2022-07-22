import { MemoryRouter } from 'react-router-dom';
import { iBrew } from '../interfaces/iBrew';
import { iUser } from '../interfaces/iUser';
import { brewReducer } from '../reducers/brew/brew.reducer';
import { userReducer } from '../reducers/user/user.reducer';
import { render, screen } from '../utils/test.utils';
import Brews from './brews';


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

describe('Given the component Brews', () => {
    describe('When calling it', () => {
        test('Then it should render a list of brews', () => {
            render(
                <MemoryRouter>
                    <Brews />
                </MemoryRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );

            const brews = screen.getByText('TEST');
            expect(brews).toBeInTheDocument();

        });
    });
});
