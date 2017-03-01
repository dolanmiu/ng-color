import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicColorPickerSlider } from './sample.component';
import { IonicColorPicker } from './color-picker.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';
import { IonicApp, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { SliderDirective } from './slider.directive';
import { TextDirective } from './text.directive';
import {ColorPickerService} from './color-picker.service';
import {ColorPickerDirective} from './color-picker.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    //IonicColorPickerSlider,
    //IonicColorPicker,
    //SliderDirective,
    //TextDirective
    ColorPickerDirective,
  ],
  bootstrap: [IonicApp],
  exports: [
    //IonicColorPickerSlider,
    //IonicColorPicker,
    ColorPickerDirective
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