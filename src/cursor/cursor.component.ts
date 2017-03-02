import { Component, Input, forwardRef, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'cursor',
    template: `
        <div class="cursor"></div>
    `,
    styles: [`
        .cursor {
            cursor: default;
            position: relative;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            border: #222 solid 2px;
        }
    `],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CursorComponent),
        multi: true
    }]
})
export class CursorComponent {

}
