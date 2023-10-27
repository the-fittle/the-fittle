import presetDuo from 'unocss-preset-duo';
import presetTheme from 'unocss-preset-theme';
import type { Theme } from 'unocss/preset-uno';

import { defineConfig, presetUno, presetTypography } from 'unocss';

export default defineConfig<Theme>({
	content: {
		pipeline: {
			include: ['**/src/**/*.{jsx,tsx,html}'],
		},
	},
	theme: {
		colors: {
			core: {
				red: '#ff8080',
				'red-100': '#ff5c5c',
				'red-200': '#ff3b3b',

				green: '#57eba1',
				'green-100': '#2ce69b',
				'green-200': '#00e396',

				blue: '#80bfff',
				'blue-100': '#4da6ff',
				'blue-200': '#269aff',

				orange: '#ffcc80',
				'orange-100': '#ffb74d',
				'orange-200': '#ffa726',

				yellow: '#ffff80',
				'yellow-100': '#ffff4d',
				'yellow-200': '#ffff26',

				teal: '#a9eff2',
				'teal-100': '#73dfe7',
				'teal-200': '#00cfde',

				purple: '#dab3ff',
				'purple-100': '#b388ff',
				'purple-200': '#9a67ff',

				background: '#ebebf0',
				'background-100': '#ffffff',
				'background-200': '#fafafc',
				'background-300': '#f2f2f5',

				text: '#1c1c28',
				'text-100': '#8f90a6',
				'text-200': '#555770',
				'text-300': '#28293d',
			},
		},
	},
	presets: [
		presetUno({
			dark: 'media',
		}),
		presetDuo({
			fonts: {
				'tt-commons': [
					{
						src: `url('/fonts/tt-commons/tt-commons-100.ttf') format('truetype')`,
					},
				],
			},
		}),
		presetTheme<Theme>({
			theme: {
				dark: {
					colors: {
						core: {
							background: '#1c1c28',
							'background-100': '#28293d',
							'background-200': '#555770',
							'background-300': '#8f90a6',

							text: '#ebebf0',
							'text-100': '#ffffff',
							'text-200': '#fafafc',
							'text-300': '#f2f2f5',
						},
					},
				},
			},
		}),
		presetTypography(),
	],
	variants: [
		// ...
	],
	rules: [
		// ...
		[
			/^(-?)(x|y)-(\d+)(?:-(-?)(x|y)-(\d+))?$/, // RegExp to capture single and combined translations
			([, neg1, axis1, val1, neg2, axis2, val2]) => {
				// Determine the direction based on the presence of '-' (negative)
				const factor1 = neg1 === '-' ? -1 : 1;
				const translation = {
					[axis1]: factor1 * parseInt(val1), // Apply the translation to the correct axis
				};

				// If there's a second part captured, it's a combined translation
				if (axis2 && val2) {
					const factor2 = neg2 === '-' ? -1 : 1;
					translation[axis2] = factor2 * parseInt(val2); // Apply the translation to the correct axis
				}

				// Depending on whether one or two axes are being transformed, construct the appropriate CSS rule
				if (
					translation.x !== undefined &&
					translation.y !== undefined
				) {
					return {
						transform: `translate(${translation.x}%, ${translation.y}%)`,
					}; // Combined translation
				} else if (translation.x !== undefined) {
					return { transform: `translateX(${translation.x}%)` }; // X-axis only
				} else if (translation.y !== undefined) {
					return { transform: `translateY(${translation.y}%)` }; // Y-axis only
				}
			},
		],
	],
});
