import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IMAGE } from './hue-image';

@Component({
    selector: 'hue',
    template: `
        <div [slider] [rgX]="1" class="hue">
            <cursor></cursor>
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
export class HueComponent {

    @Input() selectedHue: string;

    public start() {

    }
}
