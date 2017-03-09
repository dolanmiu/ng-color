import { Component, forwardRef, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IMAGE } from './hue-image';
import { HueBase } from './hue-base';
import { ColorService } from '../services/color.service';

@Component({
    selector: 'hue-rounded',
    template: `
        <div [mouse-handler] [rgX]="1" (newValue)="setHue($event)" class="hue">
            <cursor-preview [position]="cursorPosition" [color]="color"></cursor-preview>
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
            height: 10px;
            border: none;
            background-size: 100% 100%;
            background-image: url(${IMAGE});
            border-radius: 5px;
        }
    `],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => HueRoundedComponent),
        multi: true
    }]
})
export class HueRoundedComponent extends HueBase {
    private color: string;

    constructor(private colorService: ColorService, el: ElementRef) {
        super(el);
    }

    public setHue(mouseEvent: MouseHandlerOutput) {
        super.setHue(mouseEvent);
        this.color = this.colorService.hueToColor(this.value);
    }

    //From ControlValueAccessor interface
    public writeValue(v: number): void {
        super.writeValue(v);
        this.color = this.colorService.hueToColor(this.value);
    }
}
