import { Isettings } from './isettings';

export class Settings implements Isettings
{
    _id: string;
    appName: string;
    owner: string;
    LifX: boolean;
    PhillipsHue: boolean;
    IkeaTraadFri: boolean;
    Custom: boolean;
}