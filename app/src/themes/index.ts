import base from './base';
import dark from './dark';
import type { IThemes } from './utils';

/**
 * The default theme to load
 */
export const DEFAULT_THEME: string = 'dark';

export const themes: IThemes = {
	base,
	dark
};
