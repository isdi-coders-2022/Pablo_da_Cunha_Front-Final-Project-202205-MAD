import { MemoryRouter } from 'react-router-dom';
import sweetalert2 from 'sweetalert2';
import { brewReducer } from '../reducers/brew/brew.reducer';
import { userReducer } from '../reducers/user/user.reducer';
import { UserHttpStore } from '../services/user.store';
import { fireEvent, render, screen, waitFor } from '../utils/test.utils';
import { Register } from './register';
import { iBrew } from '../interfaces/iBrew';
import { iUser } from '../interfaces/iUser';
import Swal from 'sweetalert2';

jest.mock('sweetalert2');

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

// const mockFormData = {
//     name: '',
//     email: '',
//     password: '',
//     rptpassword: '',
//     role: '',
// };

const reducer = {
    user: userReducer,
    brew: brewReducer,
};
const preloadedState = {
    user: {} as iUser,
    brew: [mockBrew] as Array<iBrew>,
};

describe('Given the component Register', () => {
    describe('When is called with name', () => {
        test('Then it should render with "password"', () => {
            UserHttpStore.prototype.registerUser = jest
                .fn()
                .mockResolvedValue( { name : 'Glu'} );
            render(
                <MemoryRouter>
                    <Register></Register>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const element = screen.getByRole('button');
            fireEvent.click(element)
            expect(UserHttpStore.prototype.registerUser).toBeCalled();
        });
        describe('When form is filled and click button send', () => {
            test('Then userHttpStore should be called with valid token', async () => {
                UserHttpStore.prototype.registerUser = jest
                    .fn()
                    .mockResolvedValue({ user: { test: 'pepe' } });
                render(
                    <MemoryRouter>
                        <Register></Register>
                    </MemoryRouter>,
                    { preloadedState, reducer }
                );
                const button = screen.getByRole('button');
                fireEvent.click(button);

                expect(UserHttpStore.prototype.registerUser).toBeCalled();
            });

            describe('When form is fillend and click button login', () => {
                test('them navigate should be called', () => {
                    UserHttpStore.prototype.registerUser = jest
                        .fn()
                        .mockResolvedValue({
                            token: '9',
                            user: { test: 'pepe' },
                        });
                    render(
                        <MemoryRouter>
                            <Register></Register>
                        </MemoryRouter>,
                        { preloadedState, reducer }
                    );
                    const input = screen.getByPlaceholderText(
                        /email/i
                    ) as HTMLFormElement;
                    fireEvent.change(input, { target: { value: 'email' } });

                    const button = screen.getByText(/register/i);
                    fireEvent.click(button);

                    expect(UserHttpStore.prototype.registerUser).toBeCalled();
                });

    });
});
});
});


