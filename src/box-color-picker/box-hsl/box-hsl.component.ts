import { Component, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { HslBaseComponent } from '../../shared/hsl/hsl-base.component';
import { IMAGE } from '../../shared/hsl/hsl-image';

@Component({
    selector: 'app-hsl',
    template: `
        <div [mouse-handler] [rgX]="1" [rgY]="1" (newValue)="setSaturationLightness($event)" class="saturation-lightness" [style.background-color]="hsl()">
            <app-cursor [position]="cursorPosition" bothAxis="true"></app-cursor>
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
            width: 100%;
            height: 100%;
            border: none;
            background-size: 100% 100%;
            background-image: url(${IMAGE});
        }
    `],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => BoxHslComponent),
        multi: true,
    }],
})
export class BoxHslComponent extends HslBaseComponent {
    constructor(el: ElementRef) {
        super(el);
    }
}
