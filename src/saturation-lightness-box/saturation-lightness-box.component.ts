import { Component, Input, forwardRef, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IMAGE } from './saturation-lightness-image';
import * as convert from 'color-convert';

@Component({
    selector: 'saturation-lightness-box',
    template: `
        <div [mouse-handler] [rgX]="1" [rgY]="1" (newValue)="setSaturationLightness($event)" class="saturation-lightness" [style.background-color]="hsl()">
            <cursor [position]="cursorPosition" bothAxis="true"></cursor>
        </div>
    `,
    styles: [`
        .saturation-lightness {
            cursor: pointer;
            width: 100%;
            height: 130px;
            border: none;
            background-size: 100% 100%;
            background-image: url(${IMAGE});
        }
    `],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SaturationLightnessComponent),
        multi: true
    }]
})
export class SaturationLightnessComponent implements ControlValueAccessor {
    public cursorPosition: Vector;
    @Input() public hue: number;
    private saturation: number
    private lightness: number;

    constructor() {
        this.cursorPosition = {
            x: 0.5,
            y: 0.5,
        }
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

    //Placeholders for the callbacks which are later providesd
    //by the Control Value Accessor
    private onTouchedCallback: () => void;
    private onChangeCallback: (_: SaturationLightness) => void;

    //get accessor
    get value(): SaturationLightness {
        return {
            saturation: this.saturation | 0,
            lightness: this.lightness | 0,
        }
    };

    //set accessor including call the onchange callback
    set value(v: SaturationLightness) {
        this.saturation = v.saturation;
        this.lightness = v.lightness;
        this.onChangeCallback(v);
    }

    //From ControlValueAccessor interface
    writeValue(v: SaturationLightness) {
        if (v === undefined || v === null) {
            return;
        }

        if (v.saturation === undefined || v.lightness === undefined) {
            return;
        }

        this.saturation = v.saturation;
        this.lightness = v.lightness;
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}
