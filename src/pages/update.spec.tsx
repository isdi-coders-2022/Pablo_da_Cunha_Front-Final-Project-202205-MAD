import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { iBrew } from '../interfaces/iBrew';
import { iUser } from '../interfaces/iUser';
import { brewReducer } from '../reducers/brew/brew.reducer';
import { userReducer } from '../reducers/user/user.reducer';
import { render, screen, waitFor } from '../utils/test.utils';
import { UserHttpStore } from '../services/user.store';
import { useNavigate } from 'react-router-dom';
import ProfilePage from './update';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
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

const mockUpdateUser = jest.fn();
const mockDeleteUser = jest.fn();

const mockNavigate = jest.fn();

describe('Given the component ProfilePage', () => {
    beforeEach(() => {
        UserHttpStore.prototype.updateUser = mockUpdateUser;
        (UserHttpStore.prototype.updateUser as jest.Mock).mockResolvedValue(
            mockUser
        );
        UserHttpStore.prototype.deleteUser = mockDeleteUser;
        (UserHttpStore.prototype.deleteUser as jest.Mock).mockResolvedValue(
            mockUser
        );
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    });
    describe('When calling it with a logged user', () => {
        test('Then it should render the update form with the user`s data', () => {
            render(
                <MemoryRouter>
                    <ProfilePage />
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const saveButton = screen.getByText(/save/i);
            expect(saveButton).toBeInTheDocument();
        });

        describe('And then we type in the form fields and save the data', () => {
            test('Then the api should be called to update the data', async () => {
                render(
                    <MemoryRouter>
                        <ProfilePage />
                    </MemoryRouter>,
                    { preloadedState, reducer }
                );

                const saveButton = screen.getByText(/save/i);
                const input = screen.getByDisplayValue('email');
                userEvent.type(input, 'test');
                userEvent.click(saveButton);

                await waitFor(() => {
                    expect(mockNavigate).toHaveBeenCalledWith('/');
                });
            });
        });

        describe('And then we delete the user', () => {
            test('Then the api should be called to update the data', async () => {
                render(
                    <MemoryRouter>
                        <ProfilePage />
                    </MemoryRouter>,
                    { preloadedState, reducer }
                );

                const deleteButton = screen.getByText(/Delete Profile/i);
                userEvent.click(deleteButton);

                await waitFor(() => {
                    expect(mockNavigate).toHaveBeenCalledWith('/register');
                });
            });
        });
    });
});
