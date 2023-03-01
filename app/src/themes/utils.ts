import { themes } from './index';

export interface ITheme {
	primary: string;
	secondary: string;
	positive: string;
	negative: string;
	textPrimary: string;
	backgroundPrimary: string;
	backgroundSecondary: string;
}

export interface IThemes {
	[key: string]: ITheme;
}

export interface IMappedTheme {
	[key: string]: string | null;
}

export const mapTheme = (variables: ITheme): IMappedTheme => {
	return {
		'--color-primary': variables.primary || '',
		'--color-secondary': variables.secondary || '',
		'--color-positive': variables.positive || '',
		'--color-negative': variables.negative || '',
		'--color-text-primary': variables.textPrimary || '',
		'--background-primary': variables.backgroundPrimary || '',
		'--background-sec': variables.backgroundSecondary || ''
	};
};

export const applyTheme = (theme: string): void => {
	const themeObject: IMappedTheme = mapTheme(themes[theme]);
	if (!themeObject) return;

	const root = document.documentElement;

	Object.keys(themeObject).forEach((property) => {
		if (property === 'name') {
			return;
		}

		root.style.setProperty(property, themeObject[property]);
	});
	root.style.background = themeObject['--background-primary'] || '';
};

export const extend = (extending: ITheme, newTheme: { [key: string]: string }): ITheme => {
	return { ...extending, ...newTheme };
};
