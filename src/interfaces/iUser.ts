export interface userWithToken {
    token: string;
    user: iUser;
}



export interface iUser {
    id?: string;
    name: string;
    email: string;
    password: string;
    beers?: Array<string>;
    role: string;
    
}