import { Component, Output, forwardRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as convert from 'color-convert';

@Component({
    selector: 'ng-color',
    template: `
        <div>
            <saturation-lightness-box [hue]="hue" [(ngModel)]="saturationLightness" (ngModelChange)="calculateColor()"></saturation-lightness-box>
            <hue [(ngModel)]="hue" (ngModelChange)="calculateColor()"></hue>
        </div>
  `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ColorPicker),
        multi: true
    }]
})
export class ColorPicker {
    public saturationLightness: SaturationLightness;
    public hue: number;
    @Output() private colorChange: EventEmitter<ColorOutput>;

    constructor() {
        this.saturationLightness = {
            saturation: 1,
            lightness: 1,
        }
        this.colorChange = new EventEmitter<ColorOutput>();
        this.hue = 0;
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

        this.colorChange.emit(colorValue);
    }
}
