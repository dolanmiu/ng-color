// tslint:disable:component-selector
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ColorOutput } from '../color-output';
import { ColorUtilityService } from '../shared/color-utility/color-utility.service';
import { Hsl } from '../shared/color-utility/hsl';
import { SaturationLightness } from '../shared/hsl/saturation-lightness';

@Component({
    selector: 'ng-color-circle',
    styleUrls: ['./circle-color-picker.component.scss'],
    templateUrl: './circle-color-picker.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CircleColorPickerComponent),
            multi: true,
        },
    ],
})
export class CircleColorPickerComponent implements ControlValueAccessor, OnInit {
    @Input() public startHex: string;
    public hue: number;
    public saturationLightness: SaturationLightness;
    private onTouchedCallback: () => void;
    private onChangeCallback: (_: ColorOutput) => void;

    constructor(private colorUtility: ColorUtilityService) {
        this.saturationLightness = {
            saturation: 0,
            lightness: 0,
        };
        this.hue = 0;
        this.onTouchedCallback = () => {};
        this.onChangeCallback = () => {};
    }

    public ngOnInit(): void {
        const hsl = this.colorUtility.calculateHslFromHex(this.startHex || 'ff0000');
        this.setHsl(hsl);
        this.calculateColor();
    }

    public calculateColor(): void {
        const colorOutput = this.colorUtility.createColorOutput(
            this.hue * 360,
            this.saturationLightness.saturation * 100,
            this.saturationLightness.lightness * 100,
        );
        this.onChangeCallback(colorOutput);
        this.onTouchedCallback();
    }

    public writeValue(obj: ColorOutput): void {
        if (!obj) {
            return;
        }

        const hexValue = obj.hexString || obj.hex.toString();

        if (hexValue) {
            const hsl = this.colorUtility.calculateHslFromHex(hexValue);
            this.setHsl(hsl);
        } else if (obj.rgb) {
            const hsl = this.colorUtility.calculateHslFromRgb(obj.rgb);
            this.setHsl(hsl);
        }
    }
    public registerOnChange(fn: (_: ColorOutput) => void): void {
        this.onChangeCallback = fn;
    }
    public registerOnTouched(fn: () => void): void {
        this.onTouchedCallback = fn;
    }

    private setHsl(hsl: Hsl): void {
        this.hue = hsl.hue;
        this.saturationLightness = {
            saturation: hsl.saturation,
            lightness: hsl.lightness,
        };
    }
}
