import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BoxColorPickerComponent } from './box-color-picker.component';
import { BoxHslComponent } from './box-hsl/box-hsl.component';
import { SharedModule } from '../shared/shared.module';
import { BoxHueComponent } from './box-hue/box-hue.component';
import { BoxCursorComponent } from './box-cursor/box-cursor.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
    ],
    declarations: [
        BoxColorPickerComponent,
        BoxHueComponent,
        BoxHslComponent,
        BoxCursorComponent,
    ],
    exports: [
        BoxColorPickerComponent,
    ],
})
export class BoxColorPickerModule { }
