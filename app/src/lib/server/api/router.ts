import { trpcRouter } from '../lib';
import { itemRouter } from './items/router';

export const router = trpcRouter({
	items: itemRouter
});

export type Router = typeof router;
