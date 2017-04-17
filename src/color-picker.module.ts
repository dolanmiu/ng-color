import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ColorPickerComponent } from './color-picker/standard-picker.component';
import { ColorPreviewPickerComponent } from './color-picker/standard-preview-picker.component';
import { CursorPreviewComponent } from './cursor/cursor-preview.component';
import { CursorComponent } from './cursor/cursor.component';
import { HueRoundedComponent } from './hue/hue-rounded.component';
import { HueComponent } from './hue/hue.component';
import { MouseHandlerDirective } from './mouse-handler.directive';
import { SaturationLightnessComponent } from './saturation-lightness-box/saturation-lightness-box.component';
import { SaturationLightnessPreviewComponent } from './saturation-lightness-box/saturation-lightness-preview.component';
import { ColorService } from './services/color.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        ColorPickerComponent,
        ColorPreviewPickerComponent,
        MouseHandlerDirective,
        SaturationLightnessComponent,
        HueComponent,
        HueRoundedComponent,
        CursorComponent,
        CursorPreviewComponent,
        SaturationLightnessPreviewComponent,
    ],
    exports: [
        ColorPickerComponent,
        ColorPreviewPickerComponent,
    ],
    providers: [
        ColorService,
    ],
})
export class NgColorModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgColorModule,
            providers: [],
        };
    }
}
