import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { iBrew } from '../interfaces/iBrew';
import { iUser } from '../interfaces/iUser';
import { brewReducer } from '../reducers/brew/brew.reducer';
import { userReducer } from '../reducers/user/user.reducer';
import { UserHttpStore } from '../services/user.store';
import { render, screen } from '../utils/test.utils';
import DeleteForm from './delete';

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
            UserHttpStore.prototype.deleteUser = jest
                .fn()
                .mockResolvedValue({});
            render(
                <MemoryRouter>
                    <DeleteForm />
                </MemoryRouter>,
                {
                    preloadedState,
                    reducer,
                }
            );

            const button = screen.getByText(/account/i);
            userEvent.click(button);
            expect(button).toBeInTheDocument();
        
        });
    });
});
