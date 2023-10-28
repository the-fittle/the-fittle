import type { Theme } from '@unocss/preset-mini';
import type { Preflight } from '@unocss/core';

import * as awesome from './awesome'

export const preflights: Preflight<Theme>[] = [
	...awesome.preflight
];

export default preflights;