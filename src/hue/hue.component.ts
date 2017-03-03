import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IMAGE } from './hue-image';

@Component({
    selector: 'hue',
    template: `
        <div [mouse-handler] [rgX]="1" (newValue)="setHue($event)" class="hue">
            <cursor [position]="cursorPosition"></cursor>
        </div>
    `,
    styles: [`
        .hue {
            cursor: pointer;
            width: 100%;
            height: 16px;
            border:none;
            margin-bottom: 16px;
            background-size: 100% 100%;
            background-image: url(${IMAGE});
        }
    `],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => HueComponent),
        multi: true
    }]
})
export class HueComponent implements ControlValueAccessor {

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
