//our root app component
import { Component, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgColorModule } from './color-picker/color-picker.module';
@Component({
    selector: 'my-app',
    template: `
    <div>
        <h2>Hello {{name}}</h2>
        <ionic-color-picker (colorChange)="colorChange($event)" style.height.px="200"></ionic-color-picker>
        <div [style.background-color]="hexColor">Output Color: {{hexColor}}</div>
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
        this.color = color;
    }

    public get hexColor() {
        if (this.color === undefined) {
            return '#FFFFFF';
        }
        return this.color.hexString;
    }
}

@NgModule({
    imports: [BrowserModule, NgColorModule],
    declarations: [App],
    bootstrap: [App]
})
export class AppModule { }