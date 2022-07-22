import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { iBrew } from '../interfaces/iBrew';
import { iUser } from '../interfaces/iUser';
import { brewReducer } from '../reducers/brew/brew.reducer';
import { userReducer } from '../reducers/user/user.reducer';
import { render, screen, waitFor } from '../utils/test.utils';
import { UserHttpStore } from '../services/user.store';
import { useDispatch } from 'react-redux';
import {AddFav} from './addFav';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
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

const mockAddFav = jest.fn();
const mockDeleteUser = jest.fn();

const mockDispatch = jest.fn();

describe('Given the component ProfilePage', () => {
    beforeEach(() => {
        UserHttpStore.prototype.addFavBrew = mockAddFav;
        (UserHttpStore.prototype.addFavBrew as jest.Mock).mockResolvedValue(
            mockBrew._id
        );
        UserHttpStore.prototype.deleteUser = mockDeleteUser;
        (UserHttpStore.prototype.deleteUser as jest.Mock).mockResolvedValue(
            mockUser
        );
        (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    });
    describe('When calling it with a logged user', () => {
        test('Then it should render the update form with the user`s data', () => {
            render(
                <MemoryRouter>
                    <AddFav brew={mockBrew} />
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const addFavButton = screen.getByText(/Add/i);
            expect(addFavButton).toBeInTheDocument();
        });

        describe('And then we type in the form fields and save the data', () => {
            test('Then the api should be called to update the data', async () => {
                render(
                    <MemoryRouter>
                        <AddFav brew={mockBrew} />
                    </MemoryRouter>,
                    { preloadedState, reducer }
                );

                const addFavButton = screen.getByText(/Add/i);
                
                userEvent.click(addFavButton);

                await waitFor(() => {
                    expect(mockDispatch).toHaveBeenCalled();
                });
            });
        });

        describe('And then we delete the user', () => {
            test('Then the api should be called to update the data', async () => {
                render(
                    <MemoryRouter>
                        <AddFav brew={mockBrew} />
                    </MemoryRouter>,
                    { preloadedState, reducer }
                );

                const deleteButton = screen.getByText(/Add/i);
                userEvent.click(deleteButton);

                await waitFor(() => {
                    expect(mockDispatch).toHaveBeenCalled();
                });
            });
        });
    });
});
