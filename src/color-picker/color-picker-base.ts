import { Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as convert from 'color-convert';

export class ColorPickerBaseComponent implements ControlValueAccessor, OnInit {
    public saturationLightness: SaturationLightness;
    public hue: number;
    @Output() public colorChange: EventEmitter<ColorOutput>;
    @Input() public startHex: string;

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
        if (this.startHex !== undefined) {
            const hsl = this.calculateHslFromHex(this.startHex);
            this.hue = hsl.hue;
            this.saturationLightness = {
                saturation: hsl.saturation,
                lightness: hsl.lightness
            };
        }
    }

    public calculateColor() {
        const colorOutput = this.createColorOutput(this.hue * 360, this.saturationLightness.saturation * 100, this.saturationLightness.lightness * 100);

        this.colorChange.emit(colorOutput);
        this.value = colorOutput;
    }

    //Placeholders for the callbacks which are later providesd
    //by the Control Value Accessor
    private onTouchedCallback: () => void;
    private onChangeCallback: (_: ColorOutput) => void;

    //get accessor
    get value(): ColorOutput {
        return this.currentColor;
    };

    //set accessor including call the onchange callback
    set value(v: ColorOutput) {
        this.onChangeCallback(v);
    }

    //From ControlValueAccessor interface
    writeValue(v: any) {
        if (v === undefined || v === null) {
            return;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    private calculateHslFromHex(v: string) {
        const rgb = convert.hex.rgb(v);
        const hsl = convert.rgb.hsl(rgb);
        return {
            hue: hsl[0] / 360,
            saturation: hsl[1] / 100,
            lightness: hsl[2] / 100
        }
    }

    public get currentColor(): ColorOutput {
        return this.createColorOutput(this.hue * 360, this.saturationLightness.saturation * 100, this.saturationLightness.lightness * 100);
    }

    private createColorOutput(hue: number, saturation: number, lightness: number): ColorOutput {
        const rgbArray = convert.hsl.rgb([hue, saturation, lightness]);
        const rgb: RGB = {
            red: parseInt(rgbArray[0], 10),
            green: parseInt(rgbArray[1], 10),
            blue: parseInt(rgbArray[2], 10),
        }
        const hex = convert.rgb.hex(rgbArray);
        return {
            rgb: rgb,
            hexString: `#${hex}`,
            hex: parseInt(`0x${hex}`, 16),
        }
    }
}
