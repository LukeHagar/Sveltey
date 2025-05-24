// src/routes/dashboard/+layout.server.ts
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, parent }) => {
    // Wait for the parent layout to load, which should provide initial session state
    // (though our root +layout.server.ts currently returns null for session initially)
    const { session: rootSession } = await parent(); 

    // In a setup with hooks.server.ts, locals.getSession() would be the reliable source
    // const { session } = await locals.getSession();
    
    // For now, we rely on the client-side auth flow to update the session,
    // and this server-side check might not have the session on direct navigation
    // if hooks aren't fully set up for SSR auth.
    // However, if the client-side has authenticated, subsequent loads via invalidateAll()
    // might provide the session here if it were passed up from client to server (not typical).

    // The most robust check with the current setup (client-led auth init)
    // is actually tricky on the server for the *initial* load of a protected page.
    // The root +layout.svelte's onMount and onAuthStateChange is the primary driver.
    // This server layout will primarily act as a guard if session *is* available server-side,
    // and to pass down any dashboard-specific layout data.

    // Let's assume `rootSession` from `await parent()` might eventually hold the session
    // once client-side auth updates and potentially re-triggers load functions.
    // A truly secure SSR setup requires `hooks.server.ts` to manage the session.

    // For now, this won't effectively block SSR rendering on direct navigation if session is null from parent.
    // It's more of a structure for when session IS available.
    // The client-side checks in root +layout.svelte and on dashboard page are still important.
    
    // If we had a reliable server-side session:
    // if (!rootSession) { // or !locals.session if using hooks
    //     throw redirect(307, '/auth/login');
    // }
    // return { session: rootSession };

    // Given current limitations (no server hooks for auth yet):
    // We pass through, client-side will handle redirect if needed.
    // This file establishes the *layout* for the dashboard section.
    return {
        // session: rootSession // pass it down if available
    };
};
