//our root app component
import { Component, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { NgColorModule } from './color-picker/color-picker.module';
@Component({
    selector: 'my-app',
    template: `
    <div>
        <h1>Hello {{name}}</h1>
        <h2>Style 1</h2>
        <ng-color (colorChange)="colorChange($event)" [(ngModel)]="dench" startHex="DEADBF"></ng-color>
        <div [style.background-color]="hexColor">Output Color: {{hexColor}}</div>
        {{color | json}}
        {{dench | json}}

        <h2>Style 2</h2>
        <ng-color-preview (colorChange)="colorChange2($event)" [(ngModel)]="dench2" startHex="23bf26"></ng-color-preview>
        {{color2 | json}}
        {{dench2 | json}}

    </div>
  `,
})
export class App {
    public name: string;
    public color: ColorOutput;
    public color2: ColorOutput;
    public dench: any;
    public dench2: any;

    constructor() {
        this.name = 'Angular2'
    }

    colorChange(color: ColorOutput) {
        this.color = color;
    }

    colorChange2(color: ColorOutput) {
        this.color2 = color;
    }

    public get hexColor() {
        if (this.color === undefined) {
            return '';
        }
        return this.color.hexString;
    }
}

@NgModule({
    imports: [BrowserModule, NgColorModule, FormsModule],
    declarations: [App],
    bootstrap: [App]
})
export class AppModule { }