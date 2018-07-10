import {trigger, animate, style, group, query, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({
            opacity: 0,
            transform: 'translateY(-100%)'
          }),
          animate('0.2s ease-in')
      ], { optional: true }),
      query(':leave', [
        style({
            transform: 'scale(0.1)'
          }),
        animate('0.1s 0.1s ease-out', style({
            opacity: 0,
            transform: 'translateX(100%)'
          }))
      ], { optional: true }),
  ])
])])