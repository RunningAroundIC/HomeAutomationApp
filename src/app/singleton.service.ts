import { Injectable } from '@angular/core';

@Injectable()
export class SingletonService {

    appName: string;
    owner: string;
    LifX: boolean;
    PhillipsHue: boolean;
    IkeaTraadFri: boolean;
    Custom: boolean;


  constructor() 
  {
    console.log("Singleton");
  }

}
