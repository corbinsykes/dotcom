import {
    Component,
    HostListener,
    Input,
    OnInit
} from '@angular/core';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
    @Input() menuOpen: boolean;

    isBlinking: boolean = true;
    wordTyped: boolean = false;
    currentWord = [];
    textColor;
    overlayBackground;

    verbs = [
        'build',
        'wireframe',
        'design',
        'prototype',
        'code',
        'user test',
        'refactor',
    ];
    colors = [
        '#f7cac9',
        '#91a8d0',
        '#79c753',
        '#fae03c',
        '#f7786b',
        '#98ddde',
        '#9896a4',
    ]

    @HostListener("window:scroll", [])
    onWindowScroll() {
        this.overlayBackground = `rgba(0, 0, 0, ${((window.scrollY / window.innerWidth) * 0.5) + 0.6})`;
    }

    constructor() { }

    ngOnInit() {
        this.resetWord();
    }

    getTextColor() {
        return this.textColor;
    }

    resetWord() {
        this.isBlinking = true;

        this.textColor = this.colors[0];
        this.typeWord(0);
        this.isBlinking = false;
        // setTimeout(() => {
        // }, 4000);
    }

    typeWord(index) {
        let word = this.verbs[index];

        word.split('');

        for (let i = 0; i < word.length; i++) {
            let letter = word[i];

            setTimeout(() => {
                this.currentWord.push(letter);

                if (i + 1 === word.length) {
                    this.isBlinking = true;
                    setTimeout(() => {
                        this.deleteWord(index);
                        this.isBlinking = false;
                    }, 4000);
                }
            }, 175 * (i + 1));
        }
    }

    deleteWord(index) {
        for (let i = 0; i < this.currentWord.length; i++) {
            setTimeout(() => {
                this.currentWord.splice(-1, 1);

                if (this.currentWord.length === 0) {
                    if (index + 1 === this.verbs.length) {
                        this.resetWord();
                    } else {
                        this.textColor = this.colors[index + 1]
                        this.typeWord(index + 1);
                    }
                }
            }, 175 * (i + 1));
        }
    }
}
