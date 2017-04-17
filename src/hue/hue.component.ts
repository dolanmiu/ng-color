import { Component, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { HueBase } from './hue-base';
import { IMAGE } from './hue-image';

@Component({
    selector: 'hue',
    template: `
        <div [mouse-handler] [rgX]="1" (newValue)="setHue($event)" class="hue">
            <cursor [position]="cursorPosition"></cursor>
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
            height: 20px;
            border: none;
            margin: 16px 0;
            background-size: 100% 100%;
            background-image: url(${IMAGE});
        }
    `],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => HueComponent),
        multi: true,
    }],
})
export class HueComponent extends HueBase {
    constructor(el: ElementRef) {
        super(el);
    }
}
