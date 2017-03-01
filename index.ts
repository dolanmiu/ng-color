import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicColorPicker } from './src/sample.component';
import { SampleDirective } from './src/sample.directive';
import { SamplePipe } from './src/sample.pipe';
import { SampleService } from './src/sample.service';
import { IonicApp, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

export * from './src/sample.component';
export * from './src/sample.directive';
export * from './src/sample.pipe';
export * from './src/sample.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    IonicColorPicker,
    SampleDirective,
    SamplePipe
  ],
  bootstrap: [IonicApp],
  exports: [
    IonicColorPicker,
    SampleDirective,
    SamplePipe
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
