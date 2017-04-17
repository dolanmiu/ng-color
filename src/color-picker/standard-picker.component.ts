import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as convert from 'color-convert';
import { ColorPickerBaseComponent } from './color-picker-base';

@Component({
    selector: 'ng-color-basic',
    template: `
        <saturation-lightness-box [hue]="hue" [(ngModel)]="saturationLightness" (ngModelChange)="calculateColor()"></saturation-lightness-box>
        <hue [(ngModel)]="hue" (ngModelChange)="calculateColor()"></hue>
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ColorPickerComponent),
        multi: true,
    }],
})
export class ColorPickerComponent extends ColorPickerBaseComponent {

}
