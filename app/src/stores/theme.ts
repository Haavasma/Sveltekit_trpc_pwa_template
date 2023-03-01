import { browser } from '$app/environment';
import { derived, writable } from 'svelte/store';
import { DEFAULT_THEME, themes } from '../themes';
import { applyTheme } from '../themes/utils';

const themeStorageString = 'theme';

export const selectedTheme = writable(getInitialTheme());

selectedTheme.subscribe((newTheme) => {
	if (browser) {
		window.localStorage.setItem(themeStorageString, newTheme);
		applyTheme(newTheme);
	}
});

export const theme = derived(selectedTheme, ($selectedTheme) => {
	return themes[$selectedTheme];
});

function getInitialTheme() {
	if (browser) {
		let storedTheme = window.localStorage.getItem(themeStorageString);

		if (storedTheme) {
			return storedTheme;
		}
	}

	return DEFAULT_THEME;
}

export const bottomPadding = writable(0);
