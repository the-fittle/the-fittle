import type { Theme } from '@unocss/preset-mini';
import type { Preflight } from '@unocss/core';

import * as fonts from './font-face';

export const preflight: Preflight<Theme>[] = [
	...fonts.preflight([
		{
			url: '/fonts/awesome/awesome-brands.ttf',
			format: 'truetype',
			family: 'awesome-brands',
		},
		{
			url: '/fonts/awesome/awesome-duotone.ttf',
			format: 'truetype',
			family: 'awesome-duotone',
		},
		{
			url: '/fonts/awesome/awesome-light.ttf',
			format: 'truetype',
			family: 'awesome-light',
		},
		{
			url: '/fonts/awesome/awesome-regular.ttf',
			format: 'truetype',
			family: 'awesome-regular',
		},
		{
			url: '/fonts/awesome/awesome-solid.ttf',
			format: 'truetype',
			family: 'awesome-solid',
		},
	]),
];
