import { MemoryRouter } from 'react-router-dom';
import sweetalert2 from 'sweetalert2';
import { brewReducer } from '../reducers/brew/brew.reducer';
import { userReducer } from '../reducers/user/user.reducer';
import { UserHttpStore } from '../services/user.store';
import { fireEvent, render, screen, waitFor } from '../utils/test.utils';
import { Login } from './login';
import { iBrew } from '../interfaces/iBrew';
import { iUser } from '../interfaces/iUser';
import Swal from 'sweetalert2';

jest.mock('sweetalert2');

const reducer = {
    user: userReducer,
    brew: brewReducer,
};
const preloadedState = {
    user: {} as iUser,
    brew: [] as Array<iBrew>,
};

describe('Given the component FormLogin', () => {
    describe('When is called', () => {
        test('Then it shoul render with "contraseña"', () => {
            render(
                <MemoryRouter>
                    <Login></Login>
                </MemoryRouter>,
                { preloadedState, reducer }
            );
            const element = screen.getByPlaceholderText(/password/i);
            expect(element).toBeInTheDocument();
        });
        describe('When form is filled and click button send', () => {
            test('Then userHttpStore should be called with valid token', async () => {
                UserHttpStore.prototype.loginUser = jest
                    .fn()
                    .mockResolvedValue({ user: { test: 'pepe' } });
                render(
                    <MemoryRouter>
                        <Login></Login>
                    </MemoryRouter>,
                    { preloadedState, reducer }
                );
                const button = screen.getByRole('button');
                fireEvent.click(button);

                expect(UserHttpStore.prototype.loginUser).toBeCalled();
            });

            describe('When form is fillend and click button login', () => {
                test('them navigate should be called', () => {
                    UserHttpStore.prototype.loginUser = jest
                        .fn()
                        .mockResolvedValue({
                            token: '9',
                            user: { test: 'pepe' },
                        });
                    render(
                        <MemoryRouter>
                            <Login></Login>
                        </MemoryRouter>,
                        { preloadedState, reducer }
                    );
                    const input = screen.getByPlaceholderText(
                        /email/i
                    ) as HTMLFormElement;
                    fireEvent.change(input, { target: { value: 'email' } });

                    const button = screen.getByText(/sign/i);
                    fireEvent.click(button);

                    expect(UserHttpStore.prototype.loginUser).toBeCalled();
                });
                test('Then Swal.fire should be called', async () => {
                    render(
                        <MemoryRouter>
                            <Login></Login>
                        </MemoryRouter>,
                        { preloadedState, reducer }
                    );
                    UserHttpStore.prototype.loginUser = jest
                        .fn()
                        .mockResolvedValue({});
                    const inputs = screen.getAllByRole('textbox');
                    fireEvent.change(inputs[0], { target: { value: 'test' } });
                    const button = screen.getByText(/sign in/i);
                    fireEvent.click(button);
                    await waitFor(() => {
                        expect(sweetalert2.fire).toHaveBeenCalled();
                    });

                    expect(await sweetalert2.fire).toHaveBeenCalled();
                });
            });
        });

        describe('When submitting the form but the response is bad', () => {
            test('Then userHttpStore should be called with valid token', async () => {
                UserHttpStore.prototype.loginUser = jest
                    .fn()
                    .mockResolvedValue(undefined);
                render(
                    <MemoryRouter>
                        <Login></Login>
                    </MemoryRouter>,
                    { preloadedState, reducer }
                );
                const button = screen.getByRole('button');
                fireEvent.click(button);

                expect(UserHttpStore.prototype.loginUser).toBeCalled();
            });
        });
    });
});
