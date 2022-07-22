import { iUser } from '../interfaces/iUser';
// import { getToken } from '../utils/getToken';

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

    loginUser(user: iUser): Promise<any> {
                
        return fetch(this.apiUrl + 'login', {
            method: 'POST',
            body: JSON.stringify({ email: user.email, password: user.password }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json());
    }
    
    updateUser(userId: string, updatedUser:Partial<iUser>): Promise<iUser> {
        const token = localStorage.getItem('token')
        return fetch(this.apiUrl + `${userId}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedUser),
            headers: { 
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`}
        }).then((resp) => resp.json());
    }
   

    async addFavBrew(brewId: string){
        const token = localStorage.getItem('token')
        const resp = await fetch(
            this.apiUrl + `fav/${brewId}`, {
            method: 'PATCH',
            headers: { Authorization: `Bearer ${token}` },
        }
        );
        return await resp.json();


    }

    
    
    // unFavBrew(userId: string, brewId: string): Promise<iUser> {
    //     const token = getToken();
    //     return fetch(this.apiUrl + 'unfav/' + userId, {
    //         headers: {
    //             'Content-Type': 'application/json',

    //             Authorization: 'Bearer ' + token.token,
    //         },
    //         method: 'PATCH',
    //         body: JSON.stringify({ brew: brewId }),
    //     }).then((resp) => resp.json());
    // }
    
    deleteUser(userId: string): Promise<iUser> {
        const token = localStorage.getItem('token')
        return fetch(this.apiUrl + userId, {
            method: 'DELETE',
            headers: { authorization: `Bearer ${token}`}
        }).then((resp) => resp.json());
    }

    getUserByToken(): Promise<iUser> {
        const token = localStorage.getItem('token')
        return fetch(this.apiUrl + 'getByToken',{
        method: 'POST',
        body: JSON.stringify({}),
        headers: { 
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`}}).then((resp) => resp.json())
    }

}
