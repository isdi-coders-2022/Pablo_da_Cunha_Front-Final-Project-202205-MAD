import { MemoryRouter } from 'react-router-dom';
import { iBrew } from '../interfaces/iBrew';
import { iUser } from '../interfaces/iUser';
import { userReducer } from '../reducers/user/user.reducer';
import { render, screen } from '../utils/test.utils';
import { useParams } from 'react-router-dom';
import { iBar } from '../interfaces/iBar';
import { BarHttpStore } from '../services/bar.store';
import { barReducer } from '../reducers/bar/bar.reducer';
import Bar from './bar';

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

const mockBar: iBar = {
    _id: '1',
    name: 'bar1',
    description: 'x',
    image: 'x',
    adress: 'x',
    brews: [mockBrew],
};

const mockUser: iUser = {
    name: 'test',
    email: 'email',
    password: 'test',
    role: 'Owner',
    brews: [],
};

const reducer = {
    user: userReducer,
    bar: barReducer,
};

const preloadedState = {
    user: mockUser as iUser,
    bar: [mockBar] as Array<iBar>,
};

const mockBarOne = jest.fn();

const mockParams = jest.fn();

describe('Given the component ProfilePage', () => {
    beforeEach(() => {
        BarHttpStore.prototype.getBar = mockBarOne;
        (BarHttpStore.prototype.getBar as jest.Mock).mockResolvedValue(mockBar);
        (useParams as jest.Mock).mockReturnValue(mockParams);
    });
    describe('When calling it with a logged user', () => {
        test('Then it should render the update form with the user`s data', () => {
            render(
                <MemoryRouter>
                    <Bar />
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const result = screen.getByText(/Adress/i);
            expect(result).toBeInTheDocument();
        });
    });
});
