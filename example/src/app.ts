//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { SampleModule } from './color-picker/color-picker.module';
@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
             <ionic-color-picker style.height="200px"></ionic-color-picker>
    </div>
  `,
})
export class App {
  name:string;
  constructor() {
    this.name = 'Angular2'
  }
}

@NgModule({
  imports: [ BrowserModule, SampleModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}