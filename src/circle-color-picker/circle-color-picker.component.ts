// tslint:disable:component-selector
import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as convert from 'color-convert';

@Component({
    selector: 'ng-color-circle',
    styles: [`
        :host {
            display: block;
            height: 500px;
            width: 500px;
            position: relative;
        }

        .middle {
            position: absolute;
            top: 20%;
            left: 20%;
            width: 80%;
            height: 80%
        }
    `],
    template: `
        <!-- <saturation-lightness-box [hue]="hue" [(ngModel)]="saturationLightness" (ngModelChange)="calculateColor()"></saturation-lightness-box> -->
        <app-hue></app-hue>
        <app-hsl class="middle"></app-hsl>
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CircleColorPickerComponent),
        multi: true,
    }],
})
export class CircleColorPickerComponent {

}
