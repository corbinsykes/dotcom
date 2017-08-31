import { Component, HostListener, Inject, ViewEncapsulation, ViewChild, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DOCUMENT} from '@angular/common';

@Component({
    selector: 'app-root',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('itemAnimation', [
            state('void', style({
                transform: 'translateX(-100%)',
                opacity: 0
            })),
            transition('void => first', [
                animate('436ms ease', style({
                    transform: 'translateX(0)',
                    opacity: 1
                }))
            ]),
            transition('void => second', [
                animate('436ms 218ms ease', style({
                    transform: 'translateX(0)',
                    opacity: 1
                }))
            ]),
            transition('void => third', [
                animate('436ms 436ms ease', style({
                    transform: 'translateX(0)',
                    opacity: 1
                }))
            ]),
            transition('void => fourth', [
                animate('436ms 654ms ease', style({
                    transform: 'translateX(0)',
                    opacity: 1
                }))
            ]),
            transition('* => void', [
                animate('436ms ease', style({transform: 'translateX(100%)'}))
            ])
        ])
    ]
})
export class AppComponent {
    @ViewChild('landing') landing;

    menuOpen: boolean = false;
    opacity: number;

    constructor(
        private cdr: ChangeDetectorRef
    ) {}

    ngAfterViewChecked() {
        this.getTextColor();
        this.cdr.detectChanges();
    }

    getTextColor() {
        return this.landing.getTextColor();
    }

    toggleMenu(val: boolean) {
        this.menuOpen = val;
    }
}
