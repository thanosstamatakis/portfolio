import { trigger, transition, state, style, animate, query, stagger, keyframes, group, animateChild } from '@angular/animations';

export const fade = trigger('fade', [
    state('*', style({ opacity: 1 })),
    state('void', style({ opacity: 0 })),
    transition('* <=> void', animate('600ms ease-in-out')),
]);

export const accordion = trigger('accordion', [
    state('void', style({ height: 0 })),
    state('*', style({ height: '*' })),
    transition('* <=> void', animate('200ms ease-in-out')),
]);
export const widthAnim = [
    trigger('widthAnim', [
        transition(':enter', [
            query('.percentage', style({ width: 0 }), { optional: true }),
            query(
                '.percentage',
                stagger('100ms', [animate('300ms 250ms ease', keyframes([style({ width: 0, offset: 0 }), style({ width: '*', offset: 1 })]))]),
                { optional: true }
            ),
        ]),
    ]),
];
export const flip = trigger('rotatedState', [
    state('default', style({ transform: 'rotate(0)' })),
    state('rotated', style({ transform: 'rotate(-180deg)' })),
    transition('rotated => default', animate('300ms ease-out')),
    transition('default => rotated', animate('300ms ease-in')),
]);

export const fadeRight = trigger('fadeRight', [
    state('*', style({ opacity: 1, transform: 'translate(0)' })),
    state('void', style({ opacity: 0, transform: 'translate(200px)' })),
    transition('void => *', animate('300ms ease-in-out')),
]);

export const scaleUpDownBr = trigger('scaleUpDownBr', [
    state('*', style({ transform: 'scale(1)', 'transform-origin': '100% 100%' })),
    state('void', style({ transform: 'scale(0)', 'transform-origin': '100% 100%' })),
    transition('void => *', animate('300ms ease-in-out')),
    transition('* => void', animate('200ms ease-in-out')),
]);

export const scaleUpDown = trigger('scaleUpDown', [
    state('*', style({ transform: 'translate(-50%, 0%) scale(1)' })),
    state('void', style({ transform: 'translate(-50%, 0%) scale(0)' })),
    transition('void => *', animate('500ms ease-in-out')),
    transition('* => void', animate('500ms ease-in-out')),
]);

export const logoAnimation = [
    trigger('logoAnimation', [
        transition('void <=> *', [
            query('img', style({ opacity: 0 }), { optional: true }),
            query(
                'img',
                stagger('100ms', [
                    animate(
                        '400ms ease',
                        keyframes([
                            style({ opacity: 0, transform: 'translateY(-35px)', offset: 0 }),
                            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                        ])
                    ),
                ]),
                { optional: true }
            ),
        ]),
    ]),
];

export const listAnimationNbListItem = [
    trigger('listAnimationNbListItem', [
        transition(':enter', [
            query('nb-list-item', style({ opacity: 0 }), { optional: true }),
            query(
                'nb-list-item',
                stagger('100ms', [
                    animate(
                        '400ms ease',
                        keyframes([
                            style({ opacity: 0, transform: 'translateX(-35px)', offset: 0 }),
                            style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
                        ])
                    ),
                ]),
                { optional: true }
            ),
        ]),
    ]),
];

export const availabilityAnimation = [
    trigger('availabilityAnimation', [
        transition(':enter', [
            query('.availability', style({ opacity: 0 }), { optional: true }),
            query(
                '.availability',
                stagger('100ms', [
                    animate(
                        '300ms ease',
                        keyframes([
                            style({ opacity: 0, transform: 'translateY(45px)', offset: 0 }),
                            style({ opacity: 0.75, transform: 'translateY(0)', offset: 1 }),
                        ])
                    ),
                ]),
                { optional: true }
            ),
        ]),
    ]),
];

export const dashboardAnimations = trigger('routeAnimation', [
    transition('1 => 2, 1 => 3, 2 => 3', [
        style({ position: 'relative' }),
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                }),
            ],
            { optional: true }
        ),
        query(':enter', [style({ transform: 'translateY(45px)', opacity: '0%' })], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
            query(':leave', [animate('200ms ease-out', style({ transform: 'translateY(-45px)', opacity: '0%' }))], {
                optional: true,
            }),
            query(':enter', [animate('300ms ease-out', style({ transform: 'translateY(0px)', opacity: '100%' }))], {
                optional: true,
            }),
        ]),
        query(':enter', animateChild()),
    ]),
    transition('3 => 2, 3 => 1, 2 => 1', [
        style({ position: 'relative' }),
        query(
            ':enter, :leave',
            [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                }),
            ],
            { optional: true }
        ),
        query(':enter', [style({ transform: 'translateY(-45px)', opacity: '0%' })], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
            query(':leave', [animate('200ms ease-out', style({ transform: 'translateY(45px)', opacity: '0%' }))], {
                optional: true,
            }),
            query(':enter', [animate('300ms ease-out', style({ transform: 'translateY(0px)', opacity: '100%' }))], {
                optional: true,
            }),
        ]),
        query(':enter', animateChild(), { optional: true }),
    ]),
]);
