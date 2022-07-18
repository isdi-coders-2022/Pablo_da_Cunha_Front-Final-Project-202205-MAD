import { iUser, userWithToken } from '../interfaces/iUser';
import { getToken } from '../utils/getToken';

export class UserHttpStore {
    apiUrl: string;
    constructor() {
        this.apiUrl = 'http://localhost:3400/user/';
    }

    registerUser(user: iUser): Promise<iUser> {
        return fetch(this.apiUrl, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json());
    }

    loginUser(user: iUser): Promise<userWithToken> {
        return fetch(this.apiUrl + 'login', {
            method: 'POST',
            body: JSON.stringify({ email: user.email, password: user.password }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json());
    }
    
    updateUser(userId: string, beerId: string): Promise<iUser> {
        return fetch(this.apiUrl + userId, {
            method: 'PATCH',
            body: JSON.stringify({ beer: beerId }),
        }).then((resp) => resp.json());
    }
    addFavBeer(userId: string, beerId: string): Promise<iUser> {
        const token = getToken();
        return fetch(this.apiUrl + 'fav/' + userId, {
            headers: {
                'Content-Type': 'application/json',

                Authorization: 'Bearer ' + token.token,
            },
            method: 'PATCH',
            body: JSON.stringify({ beer: beerId }),
        }).then((resp) => resp.json());
    }
    
    unFavBeer(userId: string, beerId: string): Promise<iUser> {
        const token = getToken();
        return fetch(this.apiUrl + 'unfav/' + userId, {
            headers: {
                'Content-Type': 'application/json',

                Authorization: 'Bearer ' + token.token,
            },
            method: 'PATCH',
            body: JSON.stringify({ beer: beerId }),
        }).then((resp) => resp.json());
    }
    
    deleteUser(userId: string): Promise<iUser> {
        return fetch(this.apiUrl + 'delete/' + userId, {
            method: 'DELETE',
        }).then((resp) => resp.json());
    }

    
}
