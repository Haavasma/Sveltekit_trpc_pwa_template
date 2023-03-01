<script lang="ts">
	import { onMount } from 'svelte';
	import { trpc } from '$lib/trpc/client';
	import { page } from '$app/stores';
	import type { Item } from '$lib/models/item';

	let items: Item[] = [];
	let loading = true;

	onMount(async () => {
		loading = true;

		try {
			items = await trpc($page).items.getItems.query();
		} catch (error) {
			console.error(error);
		}

		loading = false;
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="p-3">
	{#if loading}
		<p>loading...</p>
	{:else}
		{#each items as message}
			<h2>NAME</h2>
			<p>{message.title}</p>
			<h2>DESCRIPTION</h2>
			<p>{message.description}</p>
		{/each}
	{/if}
</section>
