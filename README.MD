<p align="center">
    <img alt="ng-color" src="http://i.imgur.com/Ccpv8jo.png">
</p>

<p align="center">
    Simple color picker component for Angular2 
</p>

---

# ng-color
> A simple embeddable color picker component for Angular2 following best Angular2 practices, and good coding standards for easy use and easy contribution.

# Demo

https://dolanmiu.github.io/ng-color/example/index.html

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

Once your library is imported, you can use the component in your Angular application:

```html
<!-- You can now use your library component in app.component.html -->
<h1>
    {{title}}
</h1>
<ng-color (colorChange)="colorChange($event)"></ng-color>
```

It has a `colorChange` output, which as you know, fires an event when a new color is selected. The event contains the selected color.

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Dolan Miu](mailto:dolan_miu@hotmail.com)

Made with 💖 by Dolan Miu 🍆 💦 😝
