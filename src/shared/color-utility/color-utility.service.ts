import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as convert from 'color-convert';

import { ColorOutput } from './color-output';
import { Rgb } from './rgb';
import { Hsl } from './hsl';

@Injectable()
export class ColorUtilityService {

    constructor() { }

    public createColorOutput(hue: number, saturation: number, lightness: number): ColorOutput {
        const rgbArray = convert.hsl.rgb([hue, saturation, lightness]);
        const rgb: Rgb = {
            red: rgbArray[0],
            green: rgbArray[1],
            blue: rgbArray[2],
        };

        const hex = convert.rgb.hex(rgbArray);

        return {
            rgb: rgb,
            hexString: `#${hex}`,
            hex: parseInt(`0x${hex}`, 16),
        };
    }

    public calculateHslFromHex(v: string): Hsl {
        const rgb = convert.hex.rgb(v);
        const hsl = convert.rgb.hsl(rgb);
        return {
            hue: hsl[0] / 360,
            saturation: hsl[1] / 100,
            lightness: hsl[2] / 100,
        }
    }
}
