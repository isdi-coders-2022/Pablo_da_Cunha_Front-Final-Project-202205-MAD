export interface iBeer {
    id?: string;
    name: string;
    image: string;
    video: string;
    tasted: boolean;
    description: string;
    cereal: 'Wheat' | 'Barley';
    style: 'Blonde' | 'Red' | 'Dark';
    type: 'Ale' | 'Lager';
}