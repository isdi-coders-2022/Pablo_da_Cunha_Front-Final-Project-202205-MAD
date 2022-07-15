import { iUser, userWithToken } from '../interfaces/iUser';
import { UserHttpStore } from './user.store';

const user: iUser = {
    name: '',
    email: '',
    password: '',
    beers: [],
    role: '',
};

const mockuserWithToken: userWithToken = {
    token: '',
    user: user,
};

describe('Given UserHttpStore', () => {
    describe('When registerUser is called', () => {
        test('Then it should return a user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(user),
            });
            const api = new UserHttpStore();
            const response = await api.registerUser(user);
            expect(response).toEqual(user);
        });
    });
    describe('When loginUser is called', () => {
        test('Then it should return a user with token', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(mockuserWithToken),
            });
            const api = new UserHttpStore();
            const response = await api.loginUser(user);
            expect(response).toEqual(mockuserWithToken);
        });
    });
    describe('When updateUser is called', () => {
        test('Then it should update a user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({ ...user, brews: [''] }),
            });
            const api = new UserHttpStore();
            const response = await api.updateUser((user.id as string), '');
            expect(response).toEqual({ ...user, beer: [''] });
        });
    });
    describe('When deleteUser is called', () => {
        test('Then it should delete a user', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({}),
            });
            const api = new UserHttpStore();
            const response = await api.deleteUser(( user.id as string));
            expect(response).toEqual({});
        });
    });
    
});
