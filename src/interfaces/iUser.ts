import { iBrew } from "./iBrew";

export interface userWithToken {

    user: iUser;
}



export interface iUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    brews?: Array<iBrew>;
    role: string;
    
}