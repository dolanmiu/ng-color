import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IMAGE } from './saturation-lightness-image';

@Component({
    selector: 'saturation-lightness-box',
    template: `
        <div [slider] [rgX]="1" [rgY]="1" (newValue)="setSaturationLightness($event)" class="saturation-lightness blue">
            <cursor [position]="cursorPosition" class="cursor"></cursor>
        </div>
    `,
    styles: [`
        .saturation-lightness {
            cursor: pointer;
            width: 100%;
            height: 130px;
            border:none;
            background-size: 100% 100%;
            background-image: url(${IMAGE});
        }

        .blue {
            background-color: blue;
        }

        .cursor {
            -webkit-transform: translateY(-8px); /* Safari */
            transform: translateY(-8px);
        }
    `],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SaturationLightnessComponent),
        multi: true
    }]
})
export class SaturationLightnessComponent {
    public cursorPosition: Vector;
    @Input() public selectedHue: string;

    constructor() {
        this.cursorPosition = {
            x: 0,
            y: 0,
        }
    }

    public setSaturationLightness(mouseEvent: MouseHandlerOutput): void {
        console.log(mouseEvent);
        this.cursorPosition.x = mouseEvent.realWorld.x;
        this.cursorPosition.y = mouseEvent.realWorld.y;
    }
}
