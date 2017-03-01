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
import { ColorPickerDirective, DialogComponent, TextDirective, SliderDirective } from './color-picker.directive';

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
    DialogComponent, TextDirective, SliderDirective
  ],
  bootstrap: [IonicApp],
  exports: [
    //IonicColorPickerSlider,
    //IonicColorPicker,
    ColorPickerDirective,
    DialogComponent, TextDirective, SliderDirective
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