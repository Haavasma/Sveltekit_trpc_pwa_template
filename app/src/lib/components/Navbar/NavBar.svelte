<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Route } from '$lib/ROUTES';
	import { theme } from '../../../stores/theme';

	export let items: Route[] = [];

	let selectedItem = 0;
</script>

<nav>
	<div class="mx-auto px-2 sm:px-6 lg:px-8 bg-sec-background">
		<div class="flex items-center justify-between w-full">
			<!-- Logo -->

			<!-- Navigation links -->
			<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
				<div class="sm:ml-6">
					<div class="flex space-x-4">
						{#each items as item, index}
							<div
								on:click={() => {
									selectedItem = index;
									goto(item.link);
								}}
								on:keyup={(e) => {
									if (e.key === '1') {
										selectedItem = index;
										goto(item.link);
									}
								}}
								class={`flex hover:text-primary cursor-pointer p-2 rounded-md text-sm font-medium items-center ${
									selectedItem === index && 'text-primary'
								}`}
							>
								<box-icon
									name={item.icon}
									color={selectedItem === index ? $theme.primary : $theme.textPrimary}
									size="sm"
								/>
								{item.label}
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>
