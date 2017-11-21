import { Component, Input } from '@angular/core';

import { Vector } from '../../vector';

@Component({
    selector: 'app-cursor',
    template: `
        <div class="cursor" [style.left.px]="position?.x" [style.top.px]="position?.y" [ngClass]="{'offset': bothAxis}"></div>
    `,
    styles: [`
        .cursor {
            cursor: pointer;
            position: relative;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            transform: translate(-10px, 0px);
            box-shadow: 0px 0px 0px 2px #222 inset;
        }

        .offset {
            transform: translate(-10px, -10px);
        }
    `],
})
export class BoxCursorComponent {
    @Input() public position: Vector;
    @Input() public bothAxis: boolean;
    @Input() public lightness: number;

    constructor() {
        this.bothAxis = false;
    }
}
