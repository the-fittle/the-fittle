import type { Theme } from '@unocss/preset-mini';
import type { Rule } from '@unocss/core';

import {
	colorResolver,
	h,
  globalKeywords
} from '@unocss/preset-mini/utils';

const numberWithUnitRE =
	/^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i;

export const rule: Rule<Theme>[] = [
	[
		// colors
		/^(?:awesome)-(.+)$/,
		([, v]) =>
			colorResolver(
				'color',
				'awesome',
				(css) => !css.color?.toString().match(numberWithUnitRE)
			),
		{ autocomplete: 'awesome-$colors' },
	],
	[
		// globals
		/^(?:awesome)-(.+)$/,
		([, k]) => {
			return globalKeywords.includes(k) ? { color: k } : undefined;
		},
		{ autocomplete: `(awesome)-(${globalKeywords.join('|')})` },
	],
	[
		// primary opacity
		/^(?:awesome(?:-pri)?(?:mary)?)-op(?:acity)?-?(.+)$/,
		([, opacity]) => {
			let css: any = {};

			css['--un-awesome-primary-opacity'] =
				h.bracket.percent.cssvar(opacity);

			return css;
		},
		{ autocomplete: '(awesome-(pri|primary))-(op|opacity)-<percent>' },
	],
	[
		// secondary opacity
		/^(?:awesome-sec?(?:ondary)?)-op(?:acity)?-?(.+)$/,
		([, opacity]) => {
			let css: any = {};

			css['--un-awesome-secondary-opacity'] =
				h.bracket.percent.cssvar(opacity);

			return css;
		},
		{ autocomplete: '(awesome-(sec|secondary))-(op|opacity)-<percent>' },
	],
];


















































































