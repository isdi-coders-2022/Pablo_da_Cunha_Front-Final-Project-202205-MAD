import { iBrew } from '../interfaces/iBrew';
import { iUser } from '../interfaces/iUser';

export class User implements iUser {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public brews: Array<iBrew>,
    public role: string,
    public _id: string
  ) {}
}