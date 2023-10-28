import { presetDuo } from 'unocss-preset-duo';

import presetTheme from 'unocss-preset-theme';
import type { Theme } from 'unocss/preset-uno';                                            

import { defineConfig, presetUno, presetTypography } from 'unocss';

export default defineConfig<Theme>({
	content: {
		pipeline: {
			include: ['**/src/**/*.{jsx,tsx,html}', '**/src/**/*.uno.ts'],
		},
	},
	
	presets: [
		presetUno({
			dark: 'media',
		}),
		presetDuo({
			// ...
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
	],
});
