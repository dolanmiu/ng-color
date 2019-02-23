import { Hsl } from './shared/color-utility/hsl';
import { Rgb } from './shared/color-utility/rgb';

export interface ColorOutput {
    rgb: Rgb;
    hex: number;
    hexString: string;
    hsl: Hsl;
}
