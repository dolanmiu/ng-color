import { Component, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { IMAGE } from './circle-hue-image';

@Component({
    selector: 'app-hue',
    template: `
        <div [mouse-handler] [rgX]="1" (newValue)="setHue($event)" class="hue">
            <!--<cursor [position]="cursorPosition"></cursor>-->
        </div>
    `,
    styles: [`
        :host {
            display: block;
            width: 100%;
            height: 100%;
        }

        .hue {
            cursor: pointer;
            width: 100%;
            height: 100%;
            border: none;
            background-size: 100% 100%;
            background-image: url(${IMAGE});
        }
    `],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CircleHueComponent),
        multi: true,
    }],
})
export class CircleHueComponent {
    constructor(el: ElementRef) {
    }
}
