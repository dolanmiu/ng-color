//our root app component
import { Component, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SampleModule } from './color-picker/color-picker.module';
@Component({
    selector: 'my-app',
    template: `
    <div>
        <h2>Hello {{name}}</h2>
        <ionic-color-picker (colorChange)="colorChange($event)" style.height.px="200"></ionic-color-picker>
        {{color | json}}
    </div>
  `,
})
export class App {
    public name: string;
    public color: ColorOutput;

    constructor() {
        this.name = 'Angular2'
    }

    colorChange(color: ColorOutput) {
        console.log(color);
        this.color = color;
    }
}

@NgModule({
    imports: [BrowserModule, SampleModule],
    declarations: [App],
    bootstrap: [App]
})
export class AppModule { }