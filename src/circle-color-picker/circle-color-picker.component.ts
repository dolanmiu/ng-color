// tslint:disable:component-selector
import { Component, EventEmitter, forwardRef, Output, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as convert from 'color-convert';

import { ColorUtilityService } from '../shared/color-utility/color-utility.service';
import { ColorOutput } from '../shared/color-utility/color-output';
import { Hsl } from '../shared/color-utility/hsl';

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
    public hsl: Hsl;
    private onTouchedCallback: () => void;
    private onChangeCallback: (_: ColorOutput) => void;

    constructor(private colorUtility: ColorUtilityService) {
        this.hsl = {
            saturation: 0.5,
            lightness: 1,
            hue: 0,
        };
        this.colorChange = new EventEmitter<ColorOutput>();
        this.onTouchedCallback = () => { };
        this.onChangeCallback = () => { };
    }

    public calculateColor(): void {
        const colorOutput = this.colorUtility.createColorOutput(this.hsl.hue * 360, this.hsl.saturation * 100, this.hsl.lightness * 100);

        this.colorChange.emit(colorOutput);
        // this.value = colorOutput;
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
