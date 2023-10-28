import type { Theme } from '@unocss/preset-mini';
import type { Rule } from '@unocss/core';

import * as awesome from './awesome'

export const rules: Rule<Theme>[] = [ 
  ...awesome.rule 
]

export default rules