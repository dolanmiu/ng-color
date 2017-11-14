import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MouseHandlerDirective } from './mouse-handler/mouse-handler.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        MouseHandlerDirective,
    ],
    exports: [
        MouseHandlerDirective
    ],
})
export class SharedModule { }
