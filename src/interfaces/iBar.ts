import { iBrew } from "./iBrew";

export interface iBar {
    _id?: string;
    name: string;
    description: string;
    image: string;
    adress: string;
    brews: Array<iBrew>;
}