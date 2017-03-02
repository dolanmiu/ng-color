import { Component, Output, forwardRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as convert from 'color-convert';
import { Colors } from './sample.component';
import { ColorPickerService } from './color-picker.service';

@Component({
    selector: 'ionic-color-picker',
    template: `
        <div class="ionic-color-picker">
            <saturation-lightness-box [hue]="hue" [(ngModel)]="saturationLightness"></saturation-lightness-box>
            <hue [(ngModel)]="hue" (ngModelChange)="calculateColor()"></hue>{{hue}} {{saturationLightness}}{{saturationLightness?.saturation}} {{saturationLightness?.lightness}}
            {{saturationLightness | json}}
        </div>
  `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => IonicColorPicker),
        multi: true
    }]
})
export class IonicColorPicker {
    public saturationLightness: SaturationLightness;
    public hue: number;
    private colorValue: ColorOutput;
    @Output() private colorChange: EventEmitter<ColorOutput>;

    constructor(private colorService: ColorPickerService) {
        this.saturationLightness = {
            saturation: 0,
            lightness: 0,
        }
        this.colorChange = new EventEmitter<ColorOutput>();
    }

    public calculateColor(): void {
        const rgb = convert.hsl.rgb([this.hue * 360, this.saturationLightness.saturation * 100, this.saturationLightness.lightness * 100]);
        this.colorValue = {
            rgb: rgb,
            hex: convert.rgb.hex(rgb),
        }

        this.colorChange.emit(this.colorValue);
    }
}
