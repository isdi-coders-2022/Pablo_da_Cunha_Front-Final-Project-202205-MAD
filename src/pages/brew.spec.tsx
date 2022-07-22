import { MemoryRouter } from 'react-router-dom';
import { iBrew } from '../interfaces/iBrew';
import { iUser } from '../interfaces/iUser';
import { brewReducer } from '../reducers/brew/brew.reducer';
import { userReducer } from '../reducers/user/user.reducer';
import { render, screen } from '../utils/test.utils';
import { useParams } from 'react-router-dom';
import { BrewHttpStore } from '../services/brew.store';
import Brew from './brew';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}));

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
    email: 'email',
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

const mockBrewOne = jest.fn();

const mockParams = jest.fn();

describe('Given the component ProfilePage', () => {
    beforeEach(() => {
        BrewHttpStore.prototype.getBrew = mockBrewOne;
        (BrewHttpStore.prototype.getBrew as jest.Mock).mockResolvedValue(
            mockBrew
        );
        (useParams as jest.Mock).mockReturnValue(mockParams);
    });
    describe('When calling it with a logged user', () => {
        test('Then it should render the update form with the user`s data', () => {
            render(
                <MemoryRouter>
                    <Brew />
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const result = screen.getByText(/Style/i);
            expect(result).toBeInTheDocument();
        });
    });
});
