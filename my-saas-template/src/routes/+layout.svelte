<script lang="ts">
    // CSS imports for theme and skeleton base styles are removed from here.
    // They are now handled by src/app.css

    // Floating UI
    import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
    import { storePopup, Toast, Modal } from '@skeletonlabs/skeleton';
    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

    import { onMount } from 'svelte';
    import { supabase } from '$lib/supabaseClient';
    import type { Session } from '@supabase/supabase-js';
    import { invalidateAll } from '$app/navigation'; 
    import SvelteToast from '$lib/components/SvelteToast.svelte';

    let session: Session | null = null;

    onMount(() => {
        supabase.auth.getSession().then(({ data }) => {
            session = data.session;
        });

        const { data: authListener } = supabase.auth.onAuthStateChange((event, newSession) => {
            session = newSession;
            invalidateAll(); 
        });

        return () => {
            authListener?.unsubscribe();
        };
    });
</script>

<!-- Skeleton Toasts and Modals -->
<Toast position="tr" />
<Modal />
<SvelteToast />


<nav class="p-4 bg-surface-100-800-token">
    <a href="/" class="btn btn-ghost-surface">Home</a>
    <a href="/pricing" class="btn btn-ghost-surface">Pricing</a>
    <a href="/blog" class="btn btn-ghost-surface">Blog</a>
    {#if session}
        <a href="/dashboard" class="btn btn-ghost-surface">Dashboard</a>
        <form action="/auth/logout" method="POST" style="display: inline;">
            <button type="submit" class="btn btn-primary">Logout</button>
        </form>
        <span class="ml-4">Logged in as: {session.user.email}</span>
    {:else}
        <a href="/auth/login" class="btn btn-ghost-surface">Login</a>
        <a href="/auth/signup" class="btn btn-primary">Sign Up</a>
    {/if}
</nav>

<main class="p-4">
    <slot {session} /> <!-- Pass session to child pages -->
</main>
