export const noop = () => {};

import type { Preset } from 'unocss';

interface FontFaceProps {
	// Specifies references to font resources including hints about the font format and technology. It is required for the @font-face rule to be valid.
	src: string;

	// Defines the ascent metric for the font.
	accentOverride?: string;

	// Defines the descent metric for the font.
	descentOverride?: string;

	// Determines how a font face is displayed based on whether and when it is downloaded and ready to use.
	display?: string;

	// A font-stretch value. Accepts two values to specify a range that is supported by a font-face, for example font-stretch: 50% 200%;
	stretch?: string;

	// A font-style value. Accepts two values to specify a range that is supported by a font-face, for example font-style: oblique 20deg 50deg;
	style?: string;

	// A font-weight value. Accepts two values to specify a range that is supported by a font-face, for example font-weight: 100 400;
	weight?: string;

	// Allows control over advanced typographic features in OpenType fonts.
	featureSettings?: string;

	// Allows low-level control over OpenType or TrueType font variations, by specifying the four letter axis names of the features to vary, along with their variation values.
	variationSettings?: string;

	// Defines the line gap metric for the font.
	lineGapOverride?: string;

	// Defines a multiplier for glyph outlines and metrics associated with this font. This makes it easier to harmonize the designs of various fonts when rendered at the same font size.
	sizeAdjust?: string;

	// The range of Unicode code points to be used from the font.
	unicodeRange?: string;
}

type FontProps = {
	[name: string]: FontFaceProps[];
};

const createFontFaceRule = (
	fontFamily: string,
	fontFace: FontFaceProps
): string => {
	return `
    @font-face {
      font-family: ${fontFamily};
      src: ${fontFace.src};
      ${
			fontFace.accentOverride
				? `accent-override: ${fontFace.accentOverride};`
				: ''
		}
      ${
			fontFace.descentOverride
				? `descent-override: ${fontFace.descentOverride};`
				: ''
		}
      ${fontFace.display ? `display: ${fontFace.display};` : ''}
      ${fontFace.stretch ? `font-stretch: ${fontFace.stretch};` : ''}
      ${fontFace.style ? `font-style: ${fontFace.style};` : ''}
      ${fontFace.weight ? `font-weight: ${fontFace.weight};` : ''}
      ${
			fontFace.featureSettings
				? `font-feature-settings: ${fontFace.featureSettings};`
				: ''
		}
      ${
			fontFace.variationSettings
				? `font-variation-settings: ${fontFace.variationSettings};`
				: ''
		}
      ${
			fontFace.lineGapOverride
				? `line-gap-override: ${fontFace.lineGapOverride};`
				: ''
		}
      ${fontFace.sizeAdjust ? `size-adjust: ${fontFace.sizeAdjust};` : ''}
      ${fontFace.unicodeRange ? `unicode-range: ${fontFace.unicodeRange};` : ''}
    }
    `;
};

const generateFontFaceRules = (fonts: FontProps): string => {
	let rules = '';

	for (const [font, fontRules] of Object.entries(fonts)) {
		for (const rule of fontRules) {
			rules += createFontFaceRule(font, rule);
		}
	}

	return rules;
};

export default function presetDuo(config?: { fonts: FontProps }): Preset {
	// Merge user config with default config.
	const finalConfig = {
		fonts: {
			...config?.fonts,
		},
	};

	// Generate the CSS rules.
	const fontFaceRules = generateFontFaceRules(finalConfig.fonts);

	return {
		name: 'preset-duo', // This name is required by UnoCSS and should be unique to this preset.
		rules: [
			[
				/^$/,
				() => {
					// Return the generated CSS rules as a raw string.
					return fontFaceRules;
				},
			],
		],
	};
}
