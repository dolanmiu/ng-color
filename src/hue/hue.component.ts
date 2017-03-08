import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IMAGE } from './hue-image';
import { HueBase } from './hue-base.component';

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
            height: 20px;
            border:none;
            margin: 16px 0;
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
export class HueComponent extends HueBase {

}
