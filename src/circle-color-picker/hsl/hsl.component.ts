import { Component, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { IMAGE } from '../../shared/hsl/hsl-image';
import { HslBaseComponent } from '../../shared/hsl/hsl-base.component';

@Component({
    selector: 'app-hsl',
    template: `
        <div [mouse-handler] [rgX]="1" [rgY]="1" (newValue)="setSaturationLightness($event)" class="saturation-lightness" [style.background-color]="hsl()">
            <app-cursor [position]="cursorPosition"></app-cursor>
        </div>
    `,
    styles: [`
        :host {
            display: block;
            width: 100%;
            height: 100%;
        }

        .saturation-lightness {
            cursor: pointer;
            width: inherit;
            height: inherit;
            border: none;
            background-size: 100% 100%;
            background-image: url(${IMAGE});
        }
    `],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => HslComponent),
        multi: true,
    }],
})
export class HslComponent extends HslBaseComponent {
    constructor(el: ElementRef) {
        super(el);
    }
}
