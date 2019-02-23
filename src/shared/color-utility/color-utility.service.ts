import { Injectable } from '@angular/core';
import * as convert from 'color-convert';

import { ColorOutput } from '../../color-output';
import { Hsl } from './hsl';
import { Rgb } from './rgb';

@Injectable()
export class ColorUtilityService {
    constructor() {}

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
        const [hue, saturation, lightness] = convert.rgb.hsl(rgb);
        return {
            hue: hue / 360,
            saturation: saturation / 100,
            lightness: lightness / 100,
        };
    }

    public calculateHexFromHsl(hsl: Hsl): string {
        const rgbArray = convert.hsl.rgb([hsl.hue, hsl.saturation, hsl.lightness]);
        const hex = convert.rgb.hex(rgbArray);
        return `#${hex}`;
    }
}
