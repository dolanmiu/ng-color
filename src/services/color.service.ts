import { Injectable } from '@angular/core';
import * as convert from 'color-convert';

@Injectable()
export class ColorService {
    public hueToColor(hue: number): string {
        const rgbArray = convert.hsl.rgb([hue * 360, 100, 50]);
        const hex = convert.rgb.hex(rgbArray);

        return `#${hex}`;
    }
}
