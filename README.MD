<p align="center">
    <img alt="ng-color" src="http://i.imgur.com/Ccpv8jo.png">
    <img alt="ng-color" src="https://user-images.githubusercontent.com/2917613/33105163-be204d3e-cf23-11e7-985e-b27b4a4793af.png">
</p>

<p align="center">
    Color picker components for Angular 2+
</p>

---

[![Chat on Gitter][gitter-image]][gitter-url] 
[![Build Status][travis-image]][travis-url]

# ng-color
> Simple embeddable color picker components for Angular following best Angular practices, and good coding standards for easy use and easy contribution.

## Demos

#### Plunkr

http://plnkr.co/edit/Fd4czYfUso77G28USZtg?p=preview

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

To Use this library in your `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgColorModule } from 'ng-color';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgColorModule // Specify your library as an import
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
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
It has a `colorChange` output, which as you know, fires an event when a new color is selected. The event contains the selected color.

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

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
