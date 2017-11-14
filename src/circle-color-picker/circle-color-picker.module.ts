import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CircleColorPickerComponent } from './circle-color-picker.component';
import { CircleHueComponent } from './circle-hue/circle-hue.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [
        CircleColorPickerComponent,
        CircleHueComponent,
    ],
    exports: [
        CircleColorPickerComponent,
    ],
})
export class CircleColorPickerModule { }
