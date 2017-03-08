import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IMAGE } from './hue-image';

@Component({

})
export class HueBase implements ControlValueAccessor {

    @Input() selectedHue: number;
    public cursorPosition: Vector;

    constructor() {
        this.cursorPosition = {
            x: 0,
            y: 0,
        }
    }

    public setHue(mouseEvent: MouseHandlerOutput) {
        this.cursorPosition = {
            x: mouseEvent.realWorld.x,
            y: 0,
        }
        this.value = mouseEvent.v / mouseEvent.rg;
    }

    //Placeholders for the callbacks which are later providesd
    //by the Control Value Accessor
    private onTouchedCallback: () => void;
    private onChangeCallback: (_: number) => void;

    //get accessor
    get value(): number {
        return this.selectedHue;
    };

    //set accessor including call the onchange callback
    set value(v: number) {
        this.selectedHue = v;
        //this.cursorPosition.x = 400;
        this.onChangeCallback(v);
    }

    //From ControlValueAccessor interface
    writeValue(v: number) {
        if (v === undefined || v === null) {
            return;
        }
        this.selectedHue = v;
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
