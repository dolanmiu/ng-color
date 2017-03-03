import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPicker } from './color-picker.component';
import { FormsModule } from '@angular/forms';
import { MouseHandlerDirective } from './mouse-handler.directive';
import { SaturationLightnessComponent } from './saturation-lightness-box/saturation-lightness-box.component';
import { HueComponent } from './hue/hue.component';
import { CursorComponent } from './cursor/cursor.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ColorPicker,
        MouseHandlerDirective,
        SaturationLightnessComponent,
        HueComponent,
        CursorComponent
    ],
    exports: [
        ColorPicker
    ],
    providers: [
    ]
})
export class NgColorModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgColorModule,
            providers: []
        };
    }
}
