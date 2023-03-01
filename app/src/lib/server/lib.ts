import type { Context } from '$lib/trpc/clients';
import { initTRPC } from '@trpc/server';

const t = initTRPC.context<Context>().create();

export const trpcRouter = t.router;
export const middleware = t.middleware;
export const procedure = t.procedure;
