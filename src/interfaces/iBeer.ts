export interface iBeer {
    id?: string;
    name: string;
    image: string;
    tasted: boolean;
    descrption: string;
    cereal: 'Wheat' | 'Barley';
    style: 'Blonde' | 'Red' | 'Dark';
    type: 'Ale' | 'Lager';
}