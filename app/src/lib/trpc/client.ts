import type { Router } from '$lib/server/api/router';

import { createTRPCClient, type TRPCClientInit } from 'trpc-sveltekit';

let browserclient: ReturnType<typeof createTRPCClient<Router>>;

// client singleton
export function trpc(init?: TRPCClientInit) {
	const client = createTRPCClient<Router>({ init });

	if (typeof window === 'undefined') {
		return client;
	}
	if (!browserclient) {
		browserclient = client;
	}

	return browserclient;
}
