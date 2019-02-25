# ng-color

> Simple embeddable color picker components for Angular following best Angular practices, and good coding standards for easy use and easy contribution.

<p align="center">
    <img alt="ng-color" src="http://i.imgur.com/Ccpv8jo.png" height="173">
    <img alt="ng-color" src="https://user-images.githubusercontent.com/2917613/33105163-be204d3e-cf23-11e7-985e-b27b4a4793af.png" height="173">
</p>

<p align="center">
    Color picker components for Angular 2+
</p>

---

[![Chat on Gitter][gitter-image]][gitter-url]
[![Build Status][travis-image]][travis-url]
[![code style: prettier][prettier-image]][prettier-url]

## Demos

#### StackBlitz

https://stackblitz.com/edit/angular-antayn

#### Run example folder locally (mac/unix only)

1. `npm install`
2. `npm run build`
3. `npm start`
4. Go to `http://localhost:8080/`

## Installation

To install this library, run:

```bash
$ npm install ng-color --save
```

## How to use

To use this library in your `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgColorModule } from 'ng-color';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        NgColorModule, // Inlude in @NgModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
```

Once your library is imported, you can use the component in your Angular application shown below.

### Color Pickers

#### Box

What it looks like is shown in the header

```html
<ng-color-box [(ngModel)]="color"></ng-color-box>
```

```html
<ng-color-box (ngModelChange)="colorChange($event)"></ng-color-box>
```

#### Circle

What it looks like is shown in the header

```html
<ng-color-circle [(ngModel)]="color"></ng-color-circle>
```

```html
<ng-color-circle (ngModelChange)="colorChange($event)"></ng-color-circle>
```

#### NgModel and setting the initial color

The `ngModel` is of the following format. You can use two-way or one-way binding:

```ts
export interface ColorOutput {
    rgb: Rgb;
    hex: number;
    hexString: string;
    hsl: Hsl;
}
```

Or equivalently:

```ts
export interface ColorOutput {
    rgb: {
        red: number; // 0 - 255
        green: number; // 0 - 255
        blue: number; // 0 - 255
    };
    hex: number; // 0 - 16777215
    hexString: string; // #000000 - #ffffff
    hsl: {
        hue: number; // 0 - 360
        saturation: number; // 0 - 100
        lightness: number; // 0 - 100
    };
}
```

Setting these partially also works, this library will resolve all the other components out on the next change detection cycle.

Therefore, you can set the **initial color** of the picker by doing:

```ts
this.myColor = {
    hexString: '#ff56d3',
};
```

In the `html`:

```html
<ng-color-box [(ngModel)]="myColor"></ng-color-box>
```

## Development

To build using `ng-packagr`:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Dolan Miu](mailto:dolan_miu@hotmail.com)

Made with 💖 by Dolan Miu 🍆 💦 😝

[gitter-image]: https://badges.gitter.im/dolanmiu/ng-color.svg
[gitter-url]: https://gitter.im/ng-color/Lobby
[travis-image]: https://travis-ci.org/dolanmiu/ng-color.svg?branch=master
[travis-url]: https://travis-ci.org/dolanmiu/ng-color
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
