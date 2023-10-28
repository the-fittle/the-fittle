import { definePreset } from '@unocss/core';
import { rules } from './rules';
import { preflights } from './preflights';

export interface PresetDuoOptions {}

export const presetDuo = definePreset((options: PresetDuoOptions = {}) => {
	return {
		name: 'unocss-preset-duo',
		theme: {
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
		},
		rules: [
			...rules
		],
		preflights: [
			...preflights
		],
	};
});

export default presetDuo;
