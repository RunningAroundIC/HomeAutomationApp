import { Isettings } from './isettings';

export class Settings implements Isettings
{
    _id: string;
    appName: string;
    owner: string;
    lifX: boolean;
    phillipsHue: boolean;
    ikeaTraadFri: boolean;
    custom: boolean;

    constructor(){}
}