// src/routes/auth/logout/+page.server.ts
import { redirect, error as svelteError } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ locals }) => {
        // Note: SvelteKit typically uses `locals.supabase` if you set it up in hooks.
        // Since we haven't set up hooks for supabase yet, we'll import the client directly.
        // This is not ideal for server-side, as it creates a new client instance.
        // A better approach involves setting up supabase client in `hooks.server.ts`.
        // For now, this will work for demonstration.
        const { supabase } = await import('$lib/supabaseClient'); // Temporary direct import

        const { error } = await supabase.auth.signOut();

        if (error) {
            throw svelteError(500, 'Error logging out: ' + error.message);
        }

        // Redirect to homepage with a flash message
        // SvelteKit doesn't have built-in flash messages in this manner for POST->redirect GET
        // We'll rely on client-side toast for now or implement a custom flash message store.
        // For the SvelteToast component to pick it up, we'd need to pass it via a different mechanism,
        // like a cookie that the root +layout.svelte's load function can read and then clear.
        // For simplicity in this step, the logout feedback will primarily be the UI change.
        throw redirect(303, '/');
    }
};
