import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
    selector: 'cursor-preview',
    template: `
        <div class="cursor" [style.left.px]="position?.x" [style.top.px]="position?.y - 6" [ngClass]="{'offset': bothAxis}" [style.background-color]="color"></div>
    `,
    styles: [`
        .cursor {
            cursor: pointer;
            position: relative;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            transform: translate(-10px, 0px);
            box-shadow: 0px 0px 0px 3px white inset;
        }

        .offset {
            transform: translate(-10px, -10px);
        }
    `],
})
export class CursorPreviewComponent {
    @Input() public position: Vector;
    @Input() public bothAxis: boolean;
    @Input() public lightness: number;
    @Input() public color: string;

    constructor(private sanitizer: DomSanitizer) {
        this.bothAxis = false;
    }
}
