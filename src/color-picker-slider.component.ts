import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
var convert = require('color-convert');
//import * as convert from 'color-convert';

export interface Colors {
    red: number;
    green: number;
    blue: number;
    hex: string;
}

@Component({
    selector: 'ionic-color-picker-slider',
    template: `
        <ion-list>
            <ion-item>
                <ion-range [(ngModel)]='red' color='danger' pin='true' min='0' max='255' (ngModelChange)='changeRed($event)'></ion-range>
            </ion-item>

            <ion-item>
                <ion-range [(ngModel)]='green' color='secondary' pin='true' min='0' max='255' (ngModelChange)='changeGreen($event)'></ion-range>
            </ion-item>

            <ion-item>
                <ion-range [(ngModel)]='blue' color='default' pin='true' min='0' max='255' (ngModelChange)='changeBlue($event)'></ion-range>
            </ion-item>
        </ion-list>
  `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => IonicColorPickerSlider),
        multi: true
    }]
})
export class IonicColorPickerSlider implements ControlValueAccessor {
    public red: string;
    public green: string;
    public blue: string;

    constructor() {
        this.red = '50';
        this.green = '50';
        this.blue = '50';
    }

    //Placeholders for the callbacks which are later providesd
    //by the Control Value Accessor
    private onTouchedCallback: () => void;
    private onChangeCallback: (_: Colors) => void;

    //get accessor
    get value(): Colors {
        return {
            red: parseInt(this.red, 10),
            green: parseInt(this.green, 10),
            blue: parseInt(this.blue, 10),
            hex: convert.rgb.hex(this.red, this.green, this.blue),
        };
    };

    //set accessor including call the onchange callback
    public changeRed(red: string) {
        this.red = red;
        this.onChangeCallback({
            red: parseInt(this.red),
            green: parseInt(this.green),
            blue: parseInt(this.blue),
            hex: convert.rgb.hex(this.red, this.green, this.blue),
        });
    }

    //set accessor including call the onchange callback
    public changeGreen(green: string) {
        this.green = green;
        this.onChangeCallback({
            red: parseInt(this.red),
            green: parseInt(this.green),
            blue: parseInt(this.blue),
            hex: convert.rgb.hex(this.red, this.green, this.blue),
        });
    }

    //set accessor including call the onchange callback
    public changeBlue(blue: string) {
        this.blue = blue;
        this.onChangeCallback({
            red: parseInt(this.red),
            green: parseInt(this.green),
            blue: parseInt(this.blue),
            hex: convert.rgb.hex(this.red, this.green, this.blue),
        });
    }

    //set accessor including call the onchange callback
    set value(v: Colors) {
        this.red = v.red.toString();
        this.green = v.green.toString();
        this.blue = v.blue.toString();
        this.onChangeCallback({
            red: parseInt(this.red),
            green: parseInt(this.green),
            blue: parseInt(this.blue),
            hex: convert.rgb.hex(this.red, this.green, this.blue),
        });
    }

    //From ControlValueAccessor interface
    writeValue(v: Colors) {
        if (v === undefined || v === null) {
            return;
        }

        if (v.red === undefined) {
            v.red = parseInt(this.red);
        }

        if (v.green === undefined) {
            v.green = parseInt(this.green);
        }

        if (v.blue === undefined) {
            v.blue = parseInt(this.blue);
        }
        this.red = v.red.toString();
        this.green = v.green.toString();
        this.blue = v.blue.toString();
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
