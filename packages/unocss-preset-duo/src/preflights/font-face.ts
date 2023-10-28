import type { Theme } from '@unocss/preset-mini';
import type { Preflight } from '@unocss/core';

export type PreflightFontFaceOptions = PreflightFontFaceOption[];
export interface PreflightFontFaceOption {
	url: string;
	format: string;
	family: string;
	weight?: string | number;
}

export function createFontFace(
	url: string,
	format: string,
	family: string,
	weight?: string | number
): string {
	return `
			@font-face {
				src: url(${url}) format(${format});
				font-family: ${family};
				font-weight: ${weight || 'normal'};
			}
		`;
}

export const preflight = (options: PreflightFontFaceOptions): Preflight<Theme>[] => [
	{
		getCSS() {
			let css = '';
			for (const option of options) {
				css += createFontFace(
					option.url,
					option.format,
					option.family,
					option.weight
				);
			}
			return css;
		},
	},
];
