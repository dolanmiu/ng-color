import { ElementRef, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as convert from 'color-convert';

export class SaturationLightnessBase implements ControlValueAccessor {
    public cursorPosition: Vector;
    @Input() public hue: number;
    private saturation: number
    private lightness: number;
    private onTouchedCallback: () => void;
    private onChangeCallback: (_: SaturationLightness) => void;

    constructor(private el: ElementRef) {
        this.cursorPosition = {
            x: 0.5,
            y: 0.5,
        };
        this.saturation = 0.5;
        this.lightness = 0.5;
    }

    public setSaturationLightness(mouseEvent: MouseHandlerOutput): void {
        this.cursorPosition.x = mouseEvent.realWorld.x;
        this.cursorPosition.y = mouseEvent.realWorld.y;

        const yScaleFactor = 1 / (mouseEvent.s + 1);

        const value = {
            saturation: mouseEvent.s,
            lightness: mouseEvent.v * yScaleFactor,
        };

        this.value = value;
    }

    public hsl(): string {
        const rgbArray = convert.hsl.rgb([this.hue * 360, 100, 50]);
        const hex = convert.rgb.hex(rgbArray);
        return `#${hex}`;
    }

    get value(): SaturationLightness {
        return {
            saturation: this.saturation || 0,
            lightness: this.lightness || 0,
        }
    };

    set value(v: SaturationLightness) {
        this.saturation = v.saturation;
        this.lightness = v.lightness;
        this.onChangeCallback(v);
    }

    public writeValue(v: SaturationLightness): void {
        if (v === undefined || v === null) {
            return;
        }

        if (v.saturation === undefined || v.lightness === undefined) {
            return;
        }

        const yScaleFactor = 1 / (v.saturation + 1);

        this.cursorPosition.x = v.saturation * this.el.nativeElement.offsetWidth;
        this.cursorPosition.y = (1 - v.lightness) * this.el.nativeElement.offsetHeight * yScaleFactor;
        this.saturation = v.saturation;
        this.lightness = v.lightness;
    }

    public registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }
}
