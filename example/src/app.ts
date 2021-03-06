/* tslint: disable */
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ColorOutput, NgColorModule } from 'ng-color';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <h1>Hello {{name}}</h1>
            <h2>Box</h2>
            <h3>ng-color-box</h3>
            <h4>Using startHex</h4>
            <ng-color-box (ngModelChange)="colorChange($event)" [(ngModel)]="dench" startHex="23bf26"></ng-color-box>
            <div [style.background-color]="color ? color.hexString : ''">Output Color: {{color ? color.hexString : ''}}</div>
            {{color | json}}
            {{dench | json}}

            <h4>Using ngModel instead of startHex to set initial value</h4>
            <ng-color-box [(ngModel)]="coolColor"></ng-color-box>
            {{coolColor | json}}
            <ng-color-box [(ngModel)]="coolColor"></ng-color-box>

            <h4>Not using startHex</h4>
            <ng-color-box></ng-color-box>

            <h4>Setting size</h4>
            <ng-color-box [(ngModel)]="test6" style="width: 500px;"></ng-color-box>
            {{test6 | json}}

            <h2>Circle</h2>
            <h4>Using startHex</h4>
            <ng-color-circle [(ngModel)]="test5" startHex="23bf26"></ng-color-circle>
            {{test5 | json}}

            <h4>Using ngModel instead of startHex to set initial value</h4>
            <ng-color-circle [(ngModel)]="coolColor"></ng-color-circle>
            {{coolColor | json}}

            // <h5>Sharing same ngModel</h5>
            // <ng-color-circle [(ngModel)]="test5" startHex="23bf26"></ng-color-circle>

            <h4>Not using startHex</h4>
            <ng-color-circle [(ngModel)]="test3"></ng-color-circle>
            {{test3 | json}}

            <h4>Setting size</h4>
            <ng-color-circle [(ngModel)]="test4" startHex="23bf26" style="width: 300px; height: 300px;"></ng-color-circle>
            {{test4 | json}}
        </div>
    `,
})
export class AppComponent {
    public name: string;
    public color: ColorOutput;
    public coolColor: ColorOutput;

    constructor() {
        this.name = 'Angular2';
        this.coolColor = {
            rgb: {
                red: 96.01876026397416,
                green: 32.38925361900125,
                blue: 131.19283536585365,
            },
            hexString: '#602083',
            hex: 6299779,
        };
    }

    public colorChange(color: ColorOutput): void {
        console.log(color);
        this.color = color;
    }
}

@NgModule({
    imports: [BrowserModule, NgColorModule, FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
