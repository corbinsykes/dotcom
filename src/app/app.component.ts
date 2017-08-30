import { Component, HostListener, Inject, ViewEncapsulation, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DOCUMENT} from '@angular/common';

@Component({
    selector: 'app-root',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
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
