import { trigger, state, style, transition, animate } from '@angular/animations';

export const Animation = 
{
    navTrigger: trigger('navTrigger',
    [
        state('expanded', style({width: '200px'})),
        state('collapsed', style({width: '0px'})),
        transition('collapsed => expanded', animate('300ms ease-in')),
        transition('expanded => collapsed', animate('300ms ease-out'))
    ]),

    pustLeftTrigger: trigger('pustLeftTrigger',
    [
        state('expanded', style({marginLeft: '200px'})),
        state('collapsed', style({marginLeft: '0px'})),
        transition('collapsed => expanded', animate('300ms ease-in')),
        transition('expanded => collapsed', animate('300ms ease-out'))
    ])
}