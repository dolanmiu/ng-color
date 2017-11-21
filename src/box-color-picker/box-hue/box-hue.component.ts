import { Component, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { IMAGE } from './box-hue-image';
import { Vector } from '../../vector';
import { MouseHandlerOutput } from '../../shared/mouse-handler/mouse-handler-output';

@Component({
    selector: 'app-hue',
    template: `
        <div [mouse-handler] [rgX]="1" (newValue)="setHue($event)" class="hue">
            <app-cursor [position]="cursorPosition"></app-cursor>
        </div>
    `,
    styles: [`
        :host {
            display: block;
            width: 100%;
            height: 100%;
        }

        .hue {
            cursor: pointer;
            width: 100%;
            height: 20px;
            border: none;
            margin: 16px 0 0;
            background-size: 100% 100%;
            background-image: url(${IMAGE});
        }
    `],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => BoxHueComponent),
        multi: true,
    }],
})
export class BoxHueComponent implements ControlValueAccessor {
    public cursorPosition: Vector;
    private onTouchedCallback: () => void;
    private onChangeCallback: (_: number) => void;

    constructor(private el: ElementRef) {
        this.cursorPosition = {
            x: 0,
            y: 0,
        };
        this.onTouchedCallback = () => { };
        this.onChangeCallback = () => { };
    }

    public writeValue(obj: any): void {
        console.log(obj);
    }

    public registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    public registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    public setHue(mouseEvent: MouseHandlerOutput): void {
        this.cursorPosition = {
            x: mouseEvent.realWorld.x,
            y: 0,
        };

        const hue = mouseEvent.v / mouseEvent.rg;
        this.onChangeCallback(hue);
    }
}
