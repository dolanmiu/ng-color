import { Injectable } from '@angular/core';
import * as convert from 'color-convert';

import { ColorOutput } from '../../color-output';
import { Hsl } from './hsl';
import { Rgb } from './rgb';

@Injectable()
export class ColorUtilityService {
    constructor() {}

    public createColorOutput(hue: number, saturation: number, lightness: number): ColorOutput {
        const [red, green, blue] = convert.hsl.rgb([hue, saturation, lightness]);

        const rgb: Rgb = {
            red,
            green,
            blue,
        };

        const hex = convert.rgb.hex([red, green, blue]);

        return {
            rgb: rgb,
            hexString: `#${hex}`,
            hex: parseInt(`0x${hex}`, 16),
            hsl: {
                hue,
                saturation,
                lightness,
            },
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
