import { Component, Input, forwardRef, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'cursor',
    template: `
        <div class="cursor" [style.left.px]="position.x" [style.top.px]="position.y"></div>
    `,
    styles: [`
        .cursor {
            cursor: default;
            position: relative;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            border: #222 solid 2px;
            -webkit-transform: translateX(-8px); /* Safari */
            transform: translateX(-8px);
        }
    `],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CursorComponent),
        multi: true
    }]
})
export class CursorComponent {
    @Input() public position: Vector;

    constructor() {
        this.position = {
            x: 0,
            y: 0,
        }
    }
}
