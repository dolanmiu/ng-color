import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as convert from 'color-convert';
import { SaturationLightness } from '../saturation-lightness-box/saturation-lightness-base';

export interface HueSaturationLightness {
    hue: number;
    saturation: number;
    lightness: number;
}

export interface ColorOutput {
    rgb: RGB;
    hex: number;
    hexString: string;
}

export interface RGB {
    red: number;
    green: number;
    blue: number;
}

export class ColorPickerBaseComponent implements ControlValueAccessor, OnInit {
    public saturationLightness: SaturationLightness;
    public hue: number;
    @Output() public colorChange: EventEmitter<ColorOutput>;
    @Input() public startHex: string;
    private onTouchedCallback: () => void;
    private onChangeCallback: (_: ColorOutput) => void;

    constructor() {
        this.saturationLightness = {
            saturation: 0.5,
            lightness: 1,
        }
        this.colorChange = new EventEmitter<ColorOutput>();
        // this.hue = 0.8;
        this.onTouchedCallback = () => { };
        this.onChangeCallback = () => { };
    }

    public ngOnInit(): void {
        let hsl;
        if (this.startHex !== undefined) {
            hsl = this.calculateHslFromHex(this.startHex);
        } else {
            hsl = this.calculateHslFromHex('ff0000');
        }
        this.hue = hsl.hue;
        this.saturationLightness = {
            saturation: hsl.saturation,
            lightness: hsl.lightness,
        };
        this.colorChange.emit(this.currentColor);
    }

    public calculateColor(): void {
        const colorOutput = this.createColorOutput(this.hue * 360, this.saturationLightness.saturation * 100, this.saturationLightness.lightness * 100);

        this.colorChange.emit(colorOutput);
        this.value = colorOutput;
    }

    get value(): ColorOutput {
        return this.currentColor;
    }

    set value(v: ColorOutput) {
        this.onChangeCallback(v);
    }

    public writeValue(v: any): void {
        if (v === undefined || v === null) {
            return;
        }
    }

    public registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }

    private calculateHslFromHex(v: string): HueSaturationLightness {
        const rgb = convert.hex.rgb(v);
        const hsl = convert.rgb.hsl(rgb);
        return {
            hue: hsl[0] / 360,
            saturation: hsl[1] / 100,
            lightness: hsl[2] / 100,
        }
    }

    public get currentColor(): ColorOutput {
        return this.createColorOutput(this.hue * 360, this.saturationLightness.saturation * 100, this.saturationLightness.lightness * 100);
    }

    private createColorOutput(hue: number, saturation: number, lightness: number): ColorOutput {
        const rgbArray = convert.hsl.rgb([hue, saturation, lightness]);
        const rgb: RGB = {
            red: rgbArray[0],
            green: rgbArray[1],
            blue: rgbArray[2],
        }
        const hex = convert.rgb.hex(rgbArray);
        return {
            rgb: rgb,
            hexString: `#${hex}`,
            hex: parseInt(`0x${hex}`, 16),
        }
    }
}
