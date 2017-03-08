import { Component, Output, forwardRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as convert from 'color-convert';

@Component({
    selector: 'ng-color-preview',
    template: `
        <div>
            <saturation-lightness-preview [hue]="hue" [(ngModel)]="saturationLightness" (ngModelChange)="calculateColor()"></saturation-lightness-preview>
            <div class="wrapper">
                <hue-rounded [(ngModel)]="hue" (ngModelChange)="calculateColor()" class="bar"></hue-rounded>
                <div class="preview-box" [style.background-color]="colorHex"></div>
            </div>
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
        useExisting: forwardRef(() => ColorPreviewPicker),
        multi: true
    }]
})
export class ColorPreviewPicker {
    public saturationLightness: SaturationLightness;
    public hue: number;
    public colorHex: string;
    @Output() private colorChange: EventEmitter<ColorOutput>;

    constructor() {
        this.saturationLightness = {
            saturation: 0.5,
            lightness: 1,
        }
        this.colorChange = new EventEmitter<ColorOutput>();
        this.hue = 0.5;
    }

    public calculateColor(): void {
        const rgbArray = convert.hsl.rgb([this.hue * 360, this.saturationLightness.saturation * 100, this.saturationLightness.lightness * 100]);
        const rgb: RGB = {
            red: parseInt(rgbArray[0], 10),
            green: parseInt(rgbArray[1], 10),
            blue: parseInt(rgbArray[2], 10),
        }
        const hex = convert.rgb.hex(rgbArray);
        let colorValue = {
            rgb: rgb,
            hexString: `#${hex}`,
            hex: parseInt(`0x${hex}`, 16),
        }

        this.colorHex = colorValue.hexString;
        this.colorChange.emit(colorValue);
    }
}
