import { router } from '$lib/server/api/router';
import { createContext } from '$lib/trpc/clients';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';

export const handle: Handle = createTRPCHandle({ router, createContext });
