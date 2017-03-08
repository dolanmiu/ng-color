import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPicker } from './color-picker/standard-picker.component';
import { ColorPreviewPicker } from './color-picker/standard-preview-picker.component';
import { FormsModule } from '@angular/forms';
import { MouseHandlerDirective } from './mouse-handler.directive';
import { SaturationLightnessComponent } from './saturation-lightness-box/saturation-lightness-box.component';
import { HueComponent } from './hue/hue.component';
import { HueRoundedComponent } from './hue/hue-rounded.component';
import { CursorComponent } from './cursor/cursor.component';
import { CursorPreviewComponent } from './cursor/cursor-preview.component';
import { ColorService } from './services/color.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ColorPicker,
        ColorPreviewPicker,
        MouseHandlerDirective,
        SaturationLightnessComponent,
        HueComponent,
        HueRoundedComponent,
        CursorComponent,
        CursorPreviewComponent
    ],
    exports: [
        ColorPicker,
        ColorPreviewPicker
    ],
    providers: [
        ColorService
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
