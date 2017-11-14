import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MouseHandlerDirective } from './mouse-handler/mouse-handler.directive';
import { HslBaseComponent } from './hsl/hsl-base.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        MouseHandlerDirective,
    ],
    exports: [
        MouseHandlerDirective,
    ],
})
export class SharedModule { }
