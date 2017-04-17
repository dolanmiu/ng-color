import { Component, Input, forwardRef, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IMAGE } from './hue-image';

export class HueBase implements ControlValueAccessor {

    @Input() public selectedHue: number;
    public cursorPosition: Vector;
    private onTouchedCallback: () => void;
    private onChangeCallback: (_: number) => void;

    constructor(private el: ElementRef) {
        this.cursorPosition = {
            x: 0,
            y: 0,
        }
    }

    public setHue(mouseEvent: MouseHandlerOutput): void {
        this.cursorPosition = {
            x: mouseEvent.realWorld.x,
            y: 0,
        }
        this.value = mouseEvent.v / mouseEvent.rg;
    }

    get value(): number {
        return this.selectedHue;
    }

    set value(v: number) {
        this.selectedHue = v;
        this.onChangeCallback(v);
    }

    public writeValue(v: number): void {
        if (v === undefined || v === null) {
            return;
        }
        this.cursorPosition.x = v * this.el.nativeElement.offsetWidth;
        this.selectedHue = v;
    }

    public registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    public registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}
