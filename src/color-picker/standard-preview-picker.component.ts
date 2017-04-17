import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as convert from 'color-convert';
import { ColorPickerBaseComponent } from './color-picker-base';

@Component({
    selector: 'ng-color-basic-preview',
    template: `
        <saturation-lightness-preview [hue]="hue" [(ngModel)]="saturationLightness" (ngModelChange)="calculateColor()"></saturation-lightness-preview>
        <div class="wrapper">
            <hue-rounded [(ngModel)]="hue" (ngModelChange)="calculateColor()" class="bar"></hue-rounded>
            <div class="preview-box" [style.background-color]="currentColor?.hexString"></div>
        </div>
  `,
    styles: [`
        .preview-box {
            border-radius: 5px;
            width: 25px;
            height: 25px;
            display: inline-block;
        }

        .bar {
            width: 90%;
            display: inline-block;
        }

        .wrapper {
            width: 100%;
            margin: 16px 0px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    `],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ColorPreviewPickerComponent),
        multi: true,
    }],
})
export class ColorPreviewPickerComponent extends ColorPickerBaseComponent {

}
