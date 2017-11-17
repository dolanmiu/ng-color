// tslint:disable:component-selector
import { Component, EventEmitter, forwardRef, Output, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as convert from 'color-convert';

import { ColorUtilityService } from '../shared/color-utility/color-utility.service';
import { ColorOutput } from '../shared/color-utility/color-output';
import { Hsl } from '../shared/color-utility/hsl';
import { SaturationLightness } from '../shared/hsl/saturation-lightness';

@Component({
    selector: 'ng-color-circle',
    styles: [`
        :host {
            display: block;
            height: 500px;
            width: 500px;
            position: relative;
        }

        .middle {
            position: absolute;
            top: 20%;
            left: 20%;
            width: 80%;
            height: 80%
        }
    `],
    template: `
        <app-hue></app-hue>
        <app-hsl [hue]="hue" [(ngModel)]="saturationLightness" (ngModelChange)="calculateColor()" class="middle"></app-hsl>
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CircleColorPickerComponent),
        multi: true,
    }],
})
export class CircleColorPickerComponent implements ControlValueAccessor {
    @Output() public colorChange: EventEmitter<ColorOutput>;
    @Input() public startHex: string;
    public hue: number;
    public saturationLightness: SaturationLightness;
    private onTouchedCallback: () => void;
    private onChangeCallback: (_: ColorOutput) => void;

    constructor(private colorUtility: ColorUtilityService) {
        this.colorChange = new EventEmitter<ColorOutput>();
        this.onTouchedCallback = () => { };
        this.onChangeCallback = () => { };
    }

    public calculateColor(): void {
        const colorOutput = this.colorUtility.createColorOutput(this.hue * 360, this.saturationLightness.saturation * 100, this.saturationLightness.lightness * 100);

        this.colorChange.emit(colorOutput);
        console.log(this.saturationLightness);
        // this.value = colorOutput;
        this.onChangeCallback(colorOutput);
    }

    public writeValue(obj: any): void {
        console.log(obj);
    }
    public registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }
    public registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }
}
