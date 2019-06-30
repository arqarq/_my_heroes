import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

// Routable animations
export const slideInAnimation =
  trigger('routeAnimationn', [
    transition('heroesq => heroq', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%'
        })
      ]),
      query(':enter', [
        style({left: '50%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({left: '-50%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({left: '0%'}))
        ])
      ]),
      query(':enter', animateChild())
    ]),
    transition('heroq => heroesq', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%'
        })
      ]),
      query(':enter', [
        style({left: '-50%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({left: '50%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({left: '0%'}))
        ])
      ]),
      query(':enter', animateChild())
    ])
  ]);
