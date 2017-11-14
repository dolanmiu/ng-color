import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as convert from 'color-convert';

@Component({
    selector: 'ng-color-circle',
    styles: [`
        :host {
            min-height: 300px;
            min-width: 300px;
        }
    `],
    template: `
        <!-- <saturation-lightness-box [hue]="hue" [(ngModel)]="saturationLightness" (ngModelChange)="calculateColor()"></saturation-lightness-box> -->
        <app-hue></app-hue>
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CircleColorPickerComponent),
        multi: true,
    }],
})
export class CircleColorPickerComponent {

}
