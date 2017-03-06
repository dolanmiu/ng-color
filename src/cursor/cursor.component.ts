import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
    selector: 'cursor',
    template: `
        <div class="cursor" [style.left.px]="position.x" [style.top.px]="position.y" [ngClass]="{'offset': bothAxis}"></div>
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
export class CursorComponent {
    @Input() public position: Vector;
    @Input() public bothAxis: boolean;
    @Input() public lightness: number;

    constructor(private sanitizer: DomSanitizer) {
        this.position = {
            x: 0,
            y: 0,
        }
        this.bothAxis = false;
    }
}
