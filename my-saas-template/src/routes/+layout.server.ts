// src/routes/+layout.server.ts
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
    // If you had Supabase client in locals (e.g., from hooks.server.ts)
    // const { session } = await locals.getSession();
    // return { session };

    // For now, without hooks.server.ts modifying locals:
    // This approach means the server-side of the root layout doesn't know about the user session
    // directly from Supabase on initial load unless we instantiate a client here or pass it differently.
    // The client-side onAuthStateChange in +layout.svelte will handle it.
    // To make session available SSR, hooks.server.ts is the way.
    // Let's return an empty session for now and let client-side handle it.
    // Later, we'll improve this with hooks.
    return {
        session: null, // This will be populated client-side by onAuthStateChange
        flash: undefined // Placeholder for flash messages if we implement them via cookies
    };
};
