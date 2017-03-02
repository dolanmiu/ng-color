import { Component, Input, forwardRef, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { IMAGE } from './saturation-lightness-image';

@Component({
    selector: 'saturation-lightness-box',
    template: `
        <div [slider] [rgX]="1" [rgY]="1" (newValue)="setSaturationLightness($event)" class="saturation-lightness" [style]="hsl()">
            <cursor [position]="cursorPosition" class="cursor"></cursor>
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

        .cursor {
            -webkit-transform: translateY(-8px); /* Safari */
            transform: translateY(-8px);
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

    constructor(private sanitizer: DomSanitizer) {
        this.cursorPosition = {
            x: 0,
            y: 0,
        }
        this.lightness = 0;
        this.saturation = 0;
    }

    public setSaturationLightness(mouseEvent: MouseHandlerOutput): void {
        this.cursorPosition.x = mouseEvent.realWorld.x;
        this.cursorPosition.y = mouseEvent.realWorld.y;

        this.value = {
            saturation: mouseEvent.s,
            lightness: mouseEvent.v
        };
    }

    public hsl(): SafeStyle {
        let hue = this.hue;
        if (!this.hue) {
            hue = 0;
        }
        return this.sanitizer.bypassSecurityTrustStyle(`background-color: hsl(${hue * 360}, 100%, 50%);`);
    }

    //Placeholders for the callbacks which are later providesd
    //by the Control Value Accessor
    private onTouchedCallback: () => void;
    private onChangeCallback: (_: SaturationLightness) => void;

    //get accessor
    get value(): SaturationLightness {
        return {
            saturation: this.saturation,
            lightness: this.lightness,
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
