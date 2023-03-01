<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { pwaInfo } from 'virtual:pwa-info';
	import '../app.css';
	import 'boxicons';

	import { DEFAULT_THEME } from '../themes';
	import { applyTheme } from '../themes/utils';
	import NavBar from '$lib/components/Navbar/NavBar.svelte';
	import { ROUTES } from '$lib/ROUTES';

	let themeLoaded = false;

	let ReloadPrompt;

	onMount(async () => {
		pwaInfo && (ReloadPrompt = (await import('$lib/ReloadPrompt.svelte')).default);
	});

	onMount(() => {
		applyTheme(DEFAULT_THEME);
		themeLoaded = true;
	});

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';
</script>

<svelte:head>
	{@html webManifest}
</svelte:head>

{#if themeLoaded}
	<main>
		<div class={`bg-primary-background text-primary-text`}>
			<div class="pb-3">
				<NavBar items={ROUTES} />
			</div>
			<slot />
		</div>
	</main>
{/if}

{#if ReloadPrompt}
	<svelte:component this={ReloadPrompt} />
{/if}
