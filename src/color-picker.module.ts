import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicColorPickerSlider } from './sample.component';
import { IonicColorPicker } from './color-picker.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';
import { IonicApp, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { ColorPickerService } from './color-picker.service';
import { MouseHandlerDirective } from './mouse-handler.directive';
import { ColorPickerDirective, DialogComponent, TextDirective } from './color-picker.directive';
import { SaturationLightnessComponent } from './saturation-lightness-box/saturation-lightness-box.component';
import { HueComponent } from './hue/hue.component';
import { CursorComponent } from './cursor/cursor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    //IonicColorPickerSlider,
    IonicColorPicker,
    MouseHandlerDirective,
    //TextDirective
    ColorPickerDirective,
    DialogComponent, TextDirective,
    SaturationLightnessComponent,
    HueComponent,
    CursorComponent
  ],
  bootstrap: [IonicApp],
  exports: [
    IonicColorPicker,
    ColorPickerDirective,
    DialogComponent, TextDirective
  ],
  providers: [
    ColorPickerService
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}