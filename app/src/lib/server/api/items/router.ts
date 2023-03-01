import type { Item } from '$lib/models/task';
import { procedure, trpcRouter } from '$lib/server/lib';

const items: Item[] = [
	{
		title: 'item 1',
		description: 'This is item 1'
	},
	{
		title: 'Item 2',
		description: 'This is item 2'
	},
	{
		title: 'item 3',
		description: 'This is item 3'
	}
];

// Set up type for item

export const itemRouter = trpcRouter({
	getItems: procedure.query(() => {
		return items;
	})
});
