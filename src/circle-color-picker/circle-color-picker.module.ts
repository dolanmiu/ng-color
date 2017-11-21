import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CircleColorPickerComponent } from './circle-color-picker.component';
import { CircleHueComponent } from './circle-hue/circle-hue.component';
import { CursorComponent } from './cursor/cursor.component';
import { HslComponent } from './hsl/hsl.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
    ],
    declarations: [
        CircleColorPickerComponent,
        CircleHueComponent,
        HslComponent,
        CursorComponent,
    ],
    exports: [
        CircleColorPickerComponent,
    ],
})
export class CircleColorPickerModule { }
