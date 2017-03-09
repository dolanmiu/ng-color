import { Component, forwardRef, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IMAGE } from './saturation-lightness-image';
import { SaturationLightnessBase } from './saturation-lightness-base';

@Component({
    selector: 'saturation-lightness-preview',
    template: `
        <div [mouse-handler] [rgX]="1" [rgY]="1" (newValue)="setSaturationLightness($event)" class="saturation-lightness" [style.background-color]="hsl()">
            <cursor-preview [position]="cursorPosition" bothAxis="true"></cursor-preview>
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
            height: 130px;
            border: none;
            background-size: 100% 100%;
            background-image: url(${IMAGE});
        }
    `],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SaturationLightnessPreviewComponent),
        multi: true
    }]
})
export class SaturationLightnessPreviewComponent extends SaturationLightnessBase {
    constructor(el: ElementRef) {
        super(el);
    }
}
