import { Component, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { IMAGE } from './circle-hue-image';
import { Vector } from 'vector';
import { MouseHandlerOutput } from '../../shared/mouse-handler/mouse-handler-output';

@Component({
    selector: 'app-hue',
    template: `
        <div [mouse-handler] [rgX]="1" [rgY]="1" (newValue)="setHue($event)" class="hue">
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
            height: 100%;
            border: none;
            background-size: 100% 100%;
            background-image: url(${IMAGE});
        }
    `],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CircleHueComponent),
        multi: true,
    }],
})
export class CircleHueComponent implements ControlValueAccessor {
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
        const coordsFromCenter = {
            x: mouseEvent.realWorld.x - this.el.nativeElement.offsetWidth / 2,
            y: mouseEvent.realWorld.y - this.el.nativeElement.offsetHeight / 2
        };
        const distanceFromCenter = Math.sqrt(Math.pow(coordsFromCenter.x, 2) + Math.pow(coordsFromCenter.y, 2));
        const outerMaxRadius = this.el.nativeElement.offsetWidth / 2;
        const innerMaxRadius = this.el.nativeElement.offsetWidth / 3.1;
        if (distanceFromCenter > outerMaxRadius) {
            return;
        }

        if (distanceFromCenter < innerMaxRadius) {
            return;
        }

        const hue = (Math.atan2(-coordsFromCenter.x, coordsFromCenter.y) + Math.PI) / (2 * Math.PI);
        console.log(hue);
        this.cursorPosition = {
            x: mouseEvent.realWorld.x,
            y: mouseEvent.realWorld.y,
        };

        this.onChangeCallback(hue);
    }
}
